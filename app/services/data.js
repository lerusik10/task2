import Service from '@ember/service';
import ENV from 'task2/config/environment';
import { A } from '@ember/array';

export default Service.extend ({
  init() {
    this._super(...arguments);    
    this.set('speakers', A());
    this.set('books', A());
  },

  async readSpeakers(search) {
    let queryParams = '';
    if (search) {
      queryParams = `?q=${search}`;
    }      

    const response = await fetch(`${ENV.backendURL}/speakers${queryParams}`);
    let speakers = await response.json();
    this.speakers.clear();
    this.speakers.pushObjects(speakers);
    return this.speakers;
  },

  readSpeaker(id) {
    //const response = await fetch(`${ENV.backendURL}/speakers/${id}`);
    //return response.json();
    return this.speakers.find((speaker) => speaker.id === parseInt(id));
  },

  changeSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speaker),
    });
  },

  createSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speaker),
    });
  },

  deleteSpeaker(speaker) {
    this.speakers.removeObject(speaker);
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'DELETE',
    });
  },

  async readBooks(search, tagSearch) {
    // const response = await fetch(`${ENV.backendURL}/books`);
    // return response.json();
    
    let queryParams = '';
    if (search && tagSearch) {
      queryParams = `?q=${search}&tags_like=${tagSearch}`;
    }
    else if (search) {
      queryParams = `?q=${search}`;
    }
    else if (tagSearch) {
      queryParams = `?tags_like=${tagSearch}`;
    }

    const response = await fetch(`${ENV.backendURL}/books${queryParams}`);
    let books = await response.json();
    this.books.clear();
    this.books.pushObjects(books);
    return this.books;
  },

  async readBook(id) {
    // const response = await fetch(`${ENV.backendURL}/books/${id}`);
    // return response.json();

    return this.books.find((book) => book.id === parseInt(id));
  },

  /*changeBook(book) {
    return fetch(`${ENV.backendURL}/books/${book.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  },*/

  async saveBook(book, uploadData, bNew) {
    return new Promise(async (resolve, reject) => {
      try {
        /*const savedBookPromise = await fetch(`${ENV.backendURL}/books${bNew === true ? '' : '/' + book.id}`, {
          method: bNew === true ? 'POST' : 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        });*/         

        const savedBook = await savedBookPromise.json();

        if (!uploadData) {
          resolve();
        }

        uploadData.url = `${ENV.fileUploadURL}`;
        // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
        uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
          try {
            const dataToUpload = {
              entityName: 'books',
              id: savedBook.id,
              fileName: result.filename
            };

            await fetch(`${ENV.backendURL}/saveURL`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToUpload)
            });

            // eslint-disable-next-line no-console
            console.log('Ok');
            resolve();
          }
          catch (e) {
            reject(e);
          }
        }).fail((jqXhr, textStatus, errorThrown) => {
          reject(errorThrown);
        });
      }
      catch (e) {
        reject(e);
      }
    });
  },

  deleteBook(book) {
    this.books.removeObject(book);
    return fetch(`${ENV.backendURL}/books/${book.id}`, {
      method: 'DELETE',
    });
  }
});