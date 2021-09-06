export default async (context) => {
  const files = await context.$content({ deep: true }).only(['path']).fetch();
  const list = files.map(file => {
    return file.path.split('/')[1];
  });
  const setList = new Set(list);

  console.log([...setList].sort());

  // store.commit('APP_LOADED');
}