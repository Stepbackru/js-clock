const showDateTemplate =  [
  {
    el: 'div',
    classNames: 'date',
    parent: 'app',
    child: [
      {
        el: 'p',
        classNames: 'date__greating'
      },
      {
        el: 'div',
        classNames: 'date__wrapper',
        child: [
          {
            el: 'time',
            classNames: 'date__time',
          },
          {
            el: 'p',
            classNames: 'date__today',
          },
        ]
      },
    ]
  }
];

export default showDateTemplate;
