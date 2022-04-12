import Route from '@ember/routing/route';

export default Route.extend({
  async model({ id }) {
    return RSVP.hash({
    meeting: this.store.findRecord('meeting', id),
    reports: this.store.query('report', {meetingId: id}),        
  })
}
});
