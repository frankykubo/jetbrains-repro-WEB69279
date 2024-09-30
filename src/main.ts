import { createApp, defineAsyncComponent } from 'vue';

const createAndMountApp = async() => {
  await import('@/App.vue');
  const App = defineAsyncComponent(() => import('@/App.vue'));
  const app = createApp(App);
  const i18n = await import('@/i18n');
  app.use(i18n.default)
    .provide('i18n_instance', i18n.default);
  app.mount('#app');
};

createAndMountApp()
  .catch(() => console.error('Failed to init vue app, check backend server.'));
