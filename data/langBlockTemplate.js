const langBlockTemplate = [
  {
    el: 'div',
    classNames: 'lang',
    parent: 'app',
    child: [
      {
        el: 'button',
        classNames: 'lang__btn lang__eng',
        text: 'English'
      },
      {
        el: 'button',
        classNames: 'lang__btn lang__rus',
        text: 'Русский'
      },
    ],
  },
];

export default langBlockTemplate;
