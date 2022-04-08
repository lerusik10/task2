import ApplicationSerializer from './application';
import DS from 'ember-data';
import { isNone } from '@ember/utils';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        speaker: {
            serialize: 'id',
            deserialize: 'records'
        },
        book: {
            serialize: 'id',
            deserialize: 'records'
        },
        meeting: {
            serialize: 'id',
            deserialize: 'records'
        }
    },

    serializeBelongsTo(snapshot, json, relationship) {
        // super.serializeBelongsTo(...arguments);
        let key = relationship.key;
        let belongsTo = snapshot.belongsTo(key);
    
        key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
        json[key] = isNone(belongsTo) ? belongsTo : parseInt(belongsTo.record.get('id'));
      }
});
