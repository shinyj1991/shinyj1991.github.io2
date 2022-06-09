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
    let path = '';

    result.push(`/article/detail/${article.path.replace(/\//gi, '_').slice(1)}`);

    for (let i = 0; i < depth; i++) {
      path += i > 0 ? '_' + directories[i] : directories[i];
      if (!categories.includes(path)) {
        categories.push(path);
        result.push(`/article/list/${path}`);
      }
    }
  });

  return result;
};