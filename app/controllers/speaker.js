import Controller from '@ember/controller';

export default Controller.extend ({
    queryParams: [ "search" ],
    search: '',
  
  
    actions: {
      async deleteSpeaker(speaker) {
        //await this.get('dataService').deleteSpeaker(speaker);      
        await speaker.destroyRecord(); 
        //для устранения бага (после удаления записи и дальнейшем создании - ошибка сохранения (использовал тот же id (int), который еще оставался в кэше))
        this.get('store').unloadRecord(speaker);
      }
    }  
  });