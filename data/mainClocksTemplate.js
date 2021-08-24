const mainClocksTemplate = (theme) => {
  return [
    {
      el: 'div',
      classNames: 'clock',
      parent: 'app',
      child: [
        {
          el: 'div',
          classNames: theme ? `clock__wrapper_${theme}` : `clock__wrapper`,
          child: [
            {
              el: 'div',
              classNames: 'clock__hour',
              child: [
                {
                  el: 'div',
                  classNames: theme ? `clock__arrow-hr_${theme}` : `clock__arrow-hr`,
                }
              ],
            },
            {
              el: 'div',
              classNames: 'clock__min',
              child: [
                {
                  el: 'div',
                  classNames: theme ? `clock__arrow-mn_${theme}` : `clock__arrow-mn`,
                }
              ],
            },
            {
              el: 'div',
              classNames: 'clock__sec',
              child: [
                {
                  el: 'div',
                  classNames: theme ? `clock__arrow-sc_${theme}` : `clock__arrow-sc`,
                }
              ],
            },
          ],
        },
      ],
    },
  ];  
}

export default mainClocksTemplate;
