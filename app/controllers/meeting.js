import Controller from '@ember/controller';
import { computed } from '@ember/object';
export const PER_PAGE = 2;

export default Controller.extend({
    queryParams: ['page', 'speaker', 'book', 'searchDate'],
    //search: '',
    page: 1,
    speaker: '',
    book: '',
    searchDate: '',

    pages: computed('model.meetings.meta.total', function() {
      const total = Number(this.get('model.meetings.meta.total'));
      if (Number.isNaN(total) || total <= 0) {
        return [];
      }

      return new Array(Math.ceil(total / PER_PAGE))
        .fill()
        .map((value, index) => index + 1);
    }),

    selectedSpeaker: computed('speaker', function() {
      const speaker = this.get('speaker');

      return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
    }),

    selectedBook: computed('book', function() {
      const book = this.get('book');

      return book ? this.get('model.books').findBy('id', book) : null;
    }),

    actions: {
      async deleteMeeting(meeting) {    
        await meeting.destroyRecord(); 
        //для устранения бага (после удаления записи и дальнейшем создании - ошибка сохранения (использовал тот же id (int), который еще оставался в кэше))
        this.get('store').unloadRecord(meeting);
      },

      changeSpeaker(speaker) {
        this.set('speaker', speaker ? speaker.get('id') : '');
      },

      changeBook(book) {
        this.set('book', book ? book.get('id') : '');
      },

      changeSearchDate(date) {
        this.set('searchDate', date); // date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
      },

      clearSearchDate() {
        this.set('searchDate', null);
      },

      clearFilters() {
        this.set('searchDate', null);
        this.set('book', null);
        this.set('speaker', null);
      }
    }  
});
