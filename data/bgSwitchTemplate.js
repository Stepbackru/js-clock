const bgSwitchTemplate = [
  {
    el: 'div',
    classNames: 'switcher',
    parent: 'body',
    child: [
      {
        el: 'input',
        classNames: 'switcher__checkbox',
        dataAttr: [['type', 'checkbox'], ['id', 'toggle']],
      },
      {
        el: 'label',
        classNames: 'switcher__label',
        dataAttr: [['for', 'toggle']],
        child: [
          {
            el: 'span',
            classNames: 'switcher__label-bg',
          }
        ],
      },
      {
        el: 'div',
        classNames: 'switcher__bg',
      },
    ],
  },
];

export default bgSwitchTemplate;
