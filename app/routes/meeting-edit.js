import Route from '@ember/routing/route';

export default Route.extend({
    async model({ id }) {
        return this.get('store').findRecord('meeting', id);
      },
});
