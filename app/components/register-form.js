import Component from '@ember/component';
import {get, computed} from '@ember/object';
import {inject as service } from '@ember/service';
import {validator, buildValidations} from 'ember-cp-validations';

const validations = buildValidations({
    role: validator('presence', true),
    email: [
        validator('presence', true),
        validator('format', {type: 'email'})
    ],
    password:[
        validator('presence', true),
        validator('length', {
            min: 4,
            max: 8
        })
    ],
    passwordConfirmation:[
        validator('presence', true),
        validator('confirmation', {
            on: 'password',
            message: '{description} do not match',
            description: 'Password and password confirmation'
        })
    ]
})


export default Component.extend(validations,{
    i18n: service(),
    isFormValid: computed.alias('validations.isValid'),
    action: {
        async saveUser(e) {
            e.preventDefault();
            if (this.get('isFormValid')) {
                this.get('onSubmit') ({
                    email: this.email,
                    password: this.password,
                    passwordConfirmation: this.passwordConfirmation,
                    role: this.role
                })
            }
        }
    }
});
