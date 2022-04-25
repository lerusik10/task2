import DS from 'ember-data';
import ENV from 'task2/config/environment';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default DS.JSONAPIAdapter.extend({
    session: service(),
    host: ENV.backendURL,

    /*init() {
        this._super(...arguments);
        this.set('headers', {
          'Content-Type': 'application/json'
        });
    },*/

    headers: computed(function() {
      let resultHeaders = {
        'Content-Type': 'application/json'
      };
  
      if (this.get('session.isAuthenticated')) {
        resultHeaders['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
      }
  
      return resultHeaders;
    }).volatile(),

    buildURL(modelName, id, snapshot, requestType, query) {
      let url = this._super(...arguments);
      if (modelName === 'meeting') {
        url += '?_embed=reports';
      }

      if (modelName === 'report') {
        url += '?_expand=speaker&_expand=book&_expand=meeting'
      }

      return url;        
    },

    handleResponse(status, headers, payload) {
      const meta = {
        total: headers['x-total-count'],
      };

      payload.meta = meta;

      return this._super(status, headers, payload);
    }
});
