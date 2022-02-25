import Controller from '@ember/controller';

export default Controller.extend ({   
  
    actions: {
      async saveSpeaker(speaker) {      
        //await this.get('dataService').createSpeaker(speaker);
  
        let newSpeaker = this.get('store').createRecord('speaker', speaker);
        await newSpeaker.save();
        
        this.transitionToRoute('speaker');
      }
    }
  });