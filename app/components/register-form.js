import Component from '@ember/component';
import {get, computed} from '@ember/object';
import {inject as service } from '@ember/service';
import {validator, buildValidations} from 'ember-cp-validations';
import { translationMacro as t } from "ember-i18n";

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
            message: computed('model.passwordConfirmation', 'model.i18n.locale', function() {
                return get(this, 'model.i18n').t('errors.passwordDoNotMatch')
                
            }),
            /*'{description} do not match',*/
            description:  computed('model.passwordConfirmation', 'model.i18n.locale', function() {
                return '{description}' + get(this, 'model.i18n').t('errors.passwordDescription')
            }),
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
