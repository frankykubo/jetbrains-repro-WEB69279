import { createI18n } from 'vue-i18n';
import messages from '@/lang/messages';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('appLang') ?? 'en',
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
  pluralizationRules: {
    'sk': (choice) => {
      if (choice <= 5) {
        return choice;
      }
      return 5;
    },
  },
  pluralRules: {
    'sk': (choice) => {
      if (choice <= 5) {
        return choice;
      }
      return 5;
    },
  },
});

export default i18n;
