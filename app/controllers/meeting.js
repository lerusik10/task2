import Controller from '@ember/controller';

export const PER_PAGE = 2;

export default Controller.extend({   
    actions: {
      async deleteMeeting(meeting) {    
        await meeting.destroyRecord(); 
        //для устранения бага (после удаления записи и дальнейшем создании - ошибка сохранения (использовал тот же id (int), который еще оставался в кэше))
        this.get('store').unloadRecord(meeting);
      }
    }  
});
