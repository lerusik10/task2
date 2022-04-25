import Component from '@ember/component';

export default Component.extend({
    actions: {
        changeSpeaker(speaker) {     
            this.set('speaker', speaker);
        },

        changeBook(book) {     
           this.set('book', book);
        },

        submitForm(e) {
            e.preventDefault();
            this.onsubmit({
                id: this.get('idReport'),
                date: this.get('date'),
                grade: this.get('grade'),
                urlVideo: this.get('urlVideo'),
                urlPresentation: this.get('urlPresentation'),
                review: this.get('review'),
                meeting: this.get('meeting'),
                book: this.get('book'),
                speaker: this.get('speaker'),
            });
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);

        this.setProperties ({
            idReport: this.get('model.report.id') ? this.get('model.report.id') : undefined,
            date: this.get('model.report.date'),
            reports: this.get('model.report.reports'),
            grade: this.get('model.report.grade'),
            urlVideo: this.get('model.report.urlVideo'),
            urlPresentation: this.get('model.report.urlPresentation'),
            review: this.get('model.report.review'),
            meeting: this.get('model.report.meeting'),
            book: this.get('model.report.book'),
            speaker: this.get('model.report.speaker'),
        })
    }
});
