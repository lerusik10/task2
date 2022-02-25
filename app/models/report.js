import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr('date'),
    grade: DS.attr('number'),
    urlVideo: DS.attr('string'),
    urlPresentation: DS.attr('string'),
    review: DS.attr('string'),
  
    meeting: DS.belongsTo('meeting'),
    book: DS.belongsTo('book'),
    speaker: DS.belongsTo('speaker') 
  });
