import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import ENV from 'task2/config/environment';
//import { inject as service } from '@ember/service';

export default Controller.extend ({
  //dataService: service('data-service'),

  actions: {    
    changeTags(newTags) {
      set(this.model, 'tags', [...newTags]);      
      //console.log(get(this, 'tags'));
    },
    
    async saveBook(e) {
      e.preventDefault();
      //set(this, 'isUploadingFile', true);
      const uploadData = get(this, 'uploadData');
      const image = get(this, 'image');
      await new Promise(async (resolve, reject) => {
        try {
          await this.model.save();

          if (!uploadData) {
            resolve();
          }

          if (!image)
          {
            uploadData.url = `${ENV.fileUploadURL}`;
            // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
            uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
            try {
              const dataToUpload = {
                entityName: 'books',
                id: parseInt(this.model.get('id')),
                fileName: result.filename
              };
  
              await fetch(`${ENV.backendURL}/saveURL`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToUpload)
              });

              set(this, 'image', get(this.model, 'image'));
  
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
          else {
            resolve();
          }         
        }
        catch (e) {
          reject(e);
        }
      });
    
      //set(this, 'isUploadingFile', false);
      this.transitionToRoute('book');
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
      set(this.model, 'image', null);
    }    
  },
  
  reset() {     
    set(this, 'uploadData', null);
    set(this, 'image', get(this.model, 'image'));
  }
});
