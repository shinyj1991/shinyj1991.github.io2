export default async () => {
  const { $content } = require('@nuxt/content');

  const articles = await $content('/score', {
    deep: true
  }).only(['path']).fetch();

  const categories = [];
  const result = [];

  articles.map(article => {
    let directories = article.path.split('/');

    directories.shift();
    directories.pop();

    let depth = directories.length;
    result.push(`/score/${article.path.replace('/score/', '').replace(/\//gi, '_')}`);

    for (let i = 0; i < depth; i++) {
      if (i === 1 && !categories.includes(directories[i])) {
        categories.push(directories[i]);
        result.push(`/musician/${directories[i]}`);
      }
    }
  });

  return result;
};