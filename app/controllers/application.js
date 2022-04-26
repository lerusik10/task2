import Controller from "@ember/controller";
import { inject as service } from '@ember/service';
import {set} from '@ember/object';

export default Controller.extend({
  session: service(),
  currentUser: service(),

  actions: {
    async logout(e) {
      e.preventDefault();

      this.get('session').invalidate();
    }
  },
  init(){
    this._super(...arguments);
    set(this, 'i18n.locale', 'en')

    // Add locales.
    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = Ember.A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.contains(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  }

  
});