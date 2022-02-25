import Controller from '@ember/controller';
//import { inject as service } from '@ember/service';

export  default Controller.extend ({
  queryParams: [ "search", "tagSearch" ],
  search: "",
  tagSearch: "",

  //dataService: service('data-service'),

  actions: {
    async deleteBook(book) {
      //await this.get('dataService').deleteBook(book);
      await book.destroyRecord();
      //this.transitionToRoute('book');
    },
    searchAll(e) {
      e.preventDefault();
      //this.get('dataService').readBooks(this.search);
      this.get('store').query('book', {q: this.search});
    },
    searchTag(e) {
      e.preventDefault();
      //this.get('dataService').readBooks(this.search, this.tagSearch);
      this.get('store').query('book', {q: this.search, tags_like: this.tagSearch});
    }    
  },

  reset() {
    this.set('search', "");
    this.set('tagSearch', "");
  }
});