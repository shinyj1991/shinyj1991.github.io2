export default async (context) => {
  context.store.commit("app_loaded");
  
  if (process.client) {
    const ratio = window.screen.width / window.innerWidth;
    document.querySelector('meta[name="viewport"]').setAttribute('content', `width=device-width, initial-scale=${ratio}, maximum-scale=${ratio}, minimum-scale=${ratio}, user-scalable=yes`);
  }
};
