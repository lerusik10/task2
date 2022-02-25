import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export  default Route.extend({
    modelmodel() {
        return EmberObject.create({
          date: new Date().getDate(),
          reports: []
        })
      }
});
