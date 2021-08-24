import { TEXT_INPUT, BTN_SUBMIT } from "../assets/utils/constants.js";

const setUserNameTemplate = () => {
  const langStore = localStorage.getItem(`lang`);

  return [
    {
      el: 'div',
      classNames: 'name',
      parent: 'app',
      child: [
        {
          el: 'div',
          classNames: 'name__wrapper',
          child: [
            {
              el: 'h2',
              classNames: 'name__caption',
              text: `${TEXT_INPUT('name')[`${langStore}`]}`,
            },
            {
              el: 'input',
              classNames: 'name__input',
              dataAttr: [['type', 'text'], ['autocomplete', 'off'], ['pattern','[a-zA-Zа-яА-ЯёЁ\s]+'], ['required', '']],
            },
            {
              el: 'button',
              classNames: 'name__submit',
              text: langStore === 'en' ? `${BTN_SUBMIT[0].en}`  : `${BTN_SUBMIT[0].ru}`,
            },
          ],
        },
      ]
    },
  ];
}

export default setUserNameTemplate;
