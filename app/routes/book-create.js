import Route from '@ember/routing/route';

export  default Route.extend ({
    model() {
      return {
        name: '',
        author: '',
        size: '',
        description: '',
        image: '',
        tags: []
      };
    },
  
    setupController(controller/*, model*/) {
      this._super(...arguments);
      controller.reset();
    }
  });
