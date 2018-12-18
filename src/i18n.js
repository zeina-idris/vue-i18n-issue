import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency', currency: 'USD'
    }
  },
  'de-DE': {
    currency: {
      style: 'currency', currency: 'EUR', currencyDisplay: 'symbol'
    }
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en',
  numberFormats,
});

export default i18n;