import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import type { VuetifyParsedTheme } from 'vuetify/types/services/theme';

/*
// Locale
import i18n from './i18n';
import ja from 'vuetify/es5/locale/ja';
import en from 'vuetify/es5/locale/en';
*/

import '@mdi/font/css/materialdesignicons.css';
import { getCurrentInstance } from '@vue/composition-api';
import { loadFonts } from './webfontloader';

loadFonts();

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  /*
  lang: {
    current: navigator.language,
    locales: { ja, en },
    t: (key, ...params) => i18n.t(key, params) as string,
  },
*/
  theme: {
    themes: {
      light: {
        primary: '#5429CC',
        secondary: '#33CC95',
        accent: '#6933FF',
        error: '#E62E4D',
        warning: '#ffeb3b',
        info: '#ff9800',
        success: '#8bc34a',

        titles: '#363F5F',
        text: '#969CB3',
        background: '#F0F2F5',

        white: '#FFFFFF',
      },
    },
    options: {
      themeCache: {
        // https://vuetifyjs.com/features/theme/#section-30ad30e330c330b730e5
        get: (key: VuetifyParsedTheme) => {
          return localStorage.getItem(JSON.stringify(key));
        },
        set: (key: VuetifyParsedTheme, value: string) => {
          localStorage.setItem(JSON.stringify(key), value);
        },
      },
      customProperties: true,
    },
  },
});

/** Get vuetify instance (For Composition api) */
export function useVuetify() {
  /** Get Instance */
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  // @ts-ignore
  return instance.proxy.$vuetify;
}
