import Route from '@ember/routing/route';

export  default Route.extend ({
    async model({ id }) {
      //return this.get('dataService').readSpeaker(id);
      return this.get('store').findRecord('speaker', id);
    }
  });
