import Route from '@ember/routing/route';

export default Route.extend({    
    
    queryParams: {
        page: {
            refreshModel: true,
        },
        speaker: {
            refreshModel: true,
        },
        book: {
            refreshModel: true,
        },
        searchDate: {
            refreshModel: true,
        }
    },

    model({ page, speaker, book, searchDate }) {    
        const query = {
            _page: page,
            _limit: PER_PAGE,
        };

        if (speaker) {
            query.speaker = speaker;
        }

        if (book) {
            query.book = book;
        }

        if (searchDate) {
            query.searchDate = searchDate;
        }

        //return this.get('store').query('meeting', query);
        return RSVP.hash({
            speakers: this.store.findAll('speaker'),
            books: this.store.findAll('book'),
            meetings: this.store.query('meeting', query),
            reports: this.store.findAll('report'),  
        });
    }
})