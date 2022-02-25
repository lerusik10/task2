import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  secondName: DS.attr('string'),
  lastName: DS.attr('string'),
  
  reports: DS.hasMany('report'),

  fullName: computed('firstName', 'secondName', 'lastName', function() {
    return `${this.get('lastName')} ${this.get('firstName')} ${this.get('secondName')}`;
  })
});
