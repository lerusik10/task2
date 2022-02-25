import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm(e) {
            e.preventDefault();
            this.onsubmit({
                id: this.get('idMeeting'),
                meetingDate: this.get('meetingDate'),
                reports: this.get('reports')
            });
        },

        changeDate(newDate) {
            this.set('meetingDate', newDate);
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);

        this.setProperties ({
            idMeeting: this.get('meeting.id') ? this.get('meeting.id') : undefined,
            meetingDate: this.get('meeting.meetingDate'),
            reports: this.get('meeting.reports')
        })
    }
});
