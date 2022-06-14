import store from '@/store';
import Vue from 'vue';
import VueRouter from 'vue-router';
import type {
  NavigationGuardNext,
  Position,
  PositionResult,
  Route,
  RouteConfig,
} from 'vue-router/types/router';
import goTo from 'vuetify/lib/services/goto';
import type { VuetifyGoToTarget } from 'vuetify/types/services/goto';

// View

Vue.use(VueRouter);

/** Router Config */
const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: HomePage,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: AboutPage,
  // },
  // {
  //   path: '*',
  //   name: 'Error',
  //   component: ErrorPage,
  // },
];

const router: VueRouter = new VueRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  scrollBehavior: async (
    to: Route,
    _from: Route,
    savedPosition: void | Position
  ): Promise<PositionResult> => {
    // https://vuetifyjs.com/features/scrolling/#router3067306e4f7f7528
    let scrollTo: VuetifyGoToTarget = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return { x: 0, y: await goTo(scrollTo) };
  },
  routes,
});

router.beforeEach(
  async (_to: Route, _from: Route, next: NavigationGuardNext<Vue>) => {
    // Show Loading
    store.dispatch('setLoading', true);
    await Vue.nextTick();

    // @see https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
    // await store.restored;

    next();
  }
);

router.afterEach(() => {
  // Hide Loading
  store.dispatch('setLoading', false);
});
export default router;
