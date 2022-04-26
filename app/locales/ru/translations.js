export default {
  errors: {
    description: "Это поле",
    inclusion: "{{description}} is not included in the list",
    exclusion: "{{description}} is reserved",
    invalid: "{{description}} is invalid",
    confirmation: "{{description}} doesn't match {{on}}",
    accepted: "{{description}} must be accepted",
    empty: "{{description}} не может быть пустым",
    blank: "{{description}} can't be blank",
    present: "{{description}} must be blank",
    collection: "{{description}} must be a collection",
    singular: "{{description}} can't be a collection",
    tooLong: "{{description}} слишком длинное (максимум {{max}} символов)",
    tooShort: "{{description}} слишком короткое (минимум {{min}} символов)",
    before: "{{description}} must be before {{before}}",
    after: "{{description}} must be after {{after}}",
    wrongDateFormat: "{{description}} должен быть в формате {{format}}",
    wrongLength: "{{description}} is the wrong length (should be {{is}} characters)",
    notANumber: "{{description}} должен быть номер",
    notAnInteger: "{{description}} должно быть целым числом",
    greaterThan: "{{description}} must be greater than {{gt}}",
    greaterThanOrEqualTo: "{{description}} must be greater than or equal to {{gte}}",
    equalTo: "{{description}} must be equal to {{is}}",
    lessThan: "{{description}} must be less than {{lt}}",
    lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
    otherThan: "{{description}} must be other than {{value}}",
    odd: "{{description}} must be odd",
    even: "{{description}} must be even",
    positive: "{{description}} must be positive",
    date: "{{description}} должно соответствовать дате",
    onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
    onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
    email: "{{description}} должно соответствовать email адресу",
    phone: "{{description}} должно соответствовать номеру телефона",
    url: "{{description}} must be a valid url",
    passwordDoNotMatch: "{{description}} не соотвествуют",
    passwordDescription: "Пароль и пароль для подтверждения"
  },
  menu: {
    books: 'Книги',
    speakers: 'Спикеры',
    meetings: 'Встречи клуба',
    login: 'Войти',
    register: 'Зарегистироваться',
    plan: "Запланировать",
    request: "Оставить заявку",
    comeout: "Выйти", 
    desktop: "Рабочий стол",
    current: "текущий",
    name: "Книжный клуб"


  },
  'language-dropdown': {
    'caption': 'Язык приложения',
    'placeholder': 'Выберите язык'
  }
};
