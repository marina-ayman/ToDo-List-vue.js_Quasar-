import { boot } from 'quasar/wrappers';
import store from 'src/store';

export default boot(({ app }) => {
  // تسجيل Vuex كـ Plugin في التطبيق
  app.use(store);
});
