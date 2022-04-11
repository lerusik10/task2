import DS from 'ember-data';
import { isNone } from '@ember/utils';

export default DS.JSONSerializer.extend({
    /*normalize(model, hash) {
        hash = this._super(...arguments);
        let hashCopy = Object.assign({}, hash);
        hashCopy.attributes = {};
        hashCopy.attributes.firstName = hashCopy.firstName;
        hashCopy.attributes.lastName = hashCopy.lastName;
        hashCopy.attributes.secondName = hashCopy.secondName;
        delete hashCopy.firstName;
        delete hashCopy.lastName;
        delete hashCopy.secondName;
        hash = {
          data: hashCopy
        };
    
        return hash;},*/
    serialize(/*snapshot, options*/) {
        let json = this._super(...arguments);
        //json.type = snapshot.modelName;
        return json;
    },
  
    keyForRelationship (key, typeClass, method) {
      if (typeClass === 'belongsTo') {
        return `${key}Id`;
      }
  
      return this._super(...arguments);
    },
  
    extractRelationship (relationshipModelName, relationshipHash) {
      
      /*let hash = relationshipHash.id ? relationshipHash.id : relationshipHash;
      return this._super.call(this, relationshipModelName, hash);*/
      return this._super(...arguments);
    },
  
    serializeBelongsTo(snapshot, json, relationship) {
      // super.serializeBelongsTo(...arguments);
      let key = relationship.key;
      let belongsTo = snapshot.belongsTo(key);
  
      key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
      json[key] = isNone(belongsTo) ? belongsTo : parseInt(belongsTo.record.get('id'));
    }
  });