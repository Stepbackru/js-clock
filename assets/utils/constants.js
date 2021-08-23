export const TIME_LANG = [
  {
    en: 'morning',
    ru: 'Доброе утро'
  },
  {
    en: 'day',
    ru: 'Добрый день'
  },
  {
    en: 'evening',
    ru: 'Добрый вечер'
  },
  {
    en: 'night',
    ru: 'Доброй ночи'
  }
];

export const TEXT_INPUT = (inputName) => {
  const inputs = [
    {
      id: 'name',
      en: 'Hello, what\'s your name?',
      ru: 'Здравствуйте, как вас зовут?'
    },
  ];

  return inputs.find(elem => elem.id === inputName);
}

export const BTN_SUBMIT = [
  {
    en: 'Submit',
    ru: 'Отправить',
  }
];
