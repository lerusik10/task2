import Route from '@ember/routing/route';

export default Route.extend ({
  queryParams: {
      search: {},
      tagSearch: {}      
    }, 
  
  //dataService: service('data-service'),

  async model() {    
    //return this.get('dataService').readBooks();
    return this.get('store').findAll('book');
  },

  setupController(controller/*, model*/) {
    this._super(...arguments);
    controller.reset();
  }
});