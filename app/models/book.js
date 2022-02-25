import DS from 'ember-data';

import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  size: DS.attr('number'),
  description: DS.attr('string'),
  image: DS.attr('string'),
  tags: DS.attr(),

  reports: DS.hasMany('report'),

  nameWithAuthor: computed('name', 'author', function() {
    return `${this.get('name')} - ${this.get('author')}`;
  })
});