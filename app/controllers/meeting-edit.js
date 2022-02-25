import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveMeeting(meeting) {
          let meetingModel = this.get('model');
          meetingModel.set('meetingDate', meeting.meetingDate);          
          
          await meetingModel.save();
    
          this.transitionToRoute('meeting');
        }
      } 
});
