import Route from '@ember/routing/route';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend ({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  
  model( { search }) {
    let promise = new Promise((resolve, reject) => {
      later (async () => {
        try {
          //let speakers = search ? await this.get('dataService').readSpeakers(search) : await this.get('dataService').readSpeakers();
          let speakers = search ? await this.get('store').query('speaker', {q: search}) : await this.get('store').findAll('speaker');
          resolve(speakers);
        }
        catch (e) {
          reject ('Connection failed');
        }
      }, 1000);
    }).
    then((speakers) => {
      this.set('controller.model', speakers);
    }).
    finally(() => {
      if (promise === this.get('modelPromise')){
        this.set('controller.isLoading', false);
      }
    });

    this.set('modelPromise', promise);
    return { isLoading: true };    
  },

  setupController(controller) {
    this._super(...arguments);

    if (this.get('modelPromise')) {
      controller.set('isLoading', true);
    }
  }
});

