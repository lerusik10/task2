import { computed } from '@ember/object';
import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';

export default Ability.extend({
  currentUser: service(),
  session: service(),

  // only the administrator can edit it
  canEdit: computed(function () {
    if (!this.get('session.isAuthenticated')) {
      return false;
    }

    return this.get('currentUser.user.role') === "administrator";

  }).volatile(),

});