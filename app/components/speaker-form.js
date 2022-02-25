import Component from '@ember/component';

export  default Component.extend({
    actions: {
        submitForm(e) {
            e.preventDefault();
            this.onsubmit({
                id: this.get('idSpeaker'),
                firstName: this.get('firstName'),
                lastName: this.get('lastName'),
                secondName: this.get('secondName')
            });
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);

        this.setProperties ({
            idSpeaker: this.get('speaker.id') ? this.get('speaker.id') : undefined,
            firstName: this.get('speaker.firstName'),
            lastName: this.get('speaker.lastName'),
            secondName: this.get('speaker.secondName')
        })
    }
});
