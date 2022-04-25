import { computed } from '@ember/object';
import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
//import { Promise } from 'rsvp';

export default Ability.extend({
  currentUser: service(),
  session: service(),

  // only the administrator can edit it
  canEdit: computed(function () {
    if (!this.get('session.isAuthenticated')) {
      return false;
    }

    /* return new Promise((resolve, reject) => {
        resolve(this.get('currentUser.user.role') === "administrator")
        .catch(() => {
          reject(false);
        });
      }); */

    return this.get('currentUser.user.role') === "administrator";

  }).volatile(),

});