import DS from 'ember-data';

export default DS.Model.extend({
    meetingDate: DS.attr('date'),
    reports: DS.hasMany('report')
  });
