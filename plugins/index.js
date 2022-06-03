export default async (context) => {
  context.store.commit("app_loaded");

  /*if (process.client) {
    const screeWidth = window.screen.width;
    const minWidth = 600;

    if (screeWidth < minWidth) {
      const ratio = screeWidth / minWidth;
      document.querySelector('meta[name="viewport"]').setAttribute('content', `width=device-width, initial-scale=${ratio}, maximum-scale=${ratio}, minimum-scale=${ratio}, user-scalable=no`);
    } else {
      document.querySelector('meta[name="viewport"]').setAttribute('content', `width=device-width, initial-scale=1, user-scalable=yes`);
    }
  }*/
};
 