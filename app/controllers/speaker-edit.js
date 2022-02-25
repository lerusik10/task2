import Controller from '@ember/controller';

export default Controller.extend ({

    actions: {
      async saveSpeaker(speaker) {
        //await this.get('dataService').changeSpeaker(speaker);
        let speakerModel = this.get('model');
        speakerModel.set('firstName', speaker.firstName);
        speakerModel.set('secondName', speaker.secondName);
        speakerModel.set('lastName', speaker.lastName);
        
        await speakerModel.save();
  
        this.transitionToRoute('speaker');
      }
    } 
  });