import Component from '@ember/component';

export  default Component.extend({   
    //classNames: ["datepicker", "datepicker-meeting", "date", "input-group", "p-0"],
    
    didInsertElement() {       
        this._super(...arguments);
        const self = this;
        this.$('.datepicker').datepicker({
            clearBtn: true,
            format: "dd.mm.yyyy",
            language: "ru",
            autoclose: true
        }).on("changeDate", function(e) {
            // `e` here contains the extra attributes
            self.get('onChageDate')(e.date);
        });
    }
})