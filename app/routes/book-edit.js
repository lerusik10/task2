import Route from '@ember/routing/route';

export default Route.extend ({

    async model({ id }) {
      return this.get('store').findRecord('book', id);
    },
  
    setupController(controller/*, model*/) {
      this._super(...arguments);
      controller.reset();
    }
  });
