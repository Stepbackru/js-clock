const cityClockTemplate = (theme, cities) => {
  const langStore = localStorage.getItem(`lang`);

  return [
    {
      el: 'div',
      classNames: 'cities__item',
      parent: 'cities',
      child: [
        {
          el: 'div',
          classNames: 'clock',
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
                {
                  el: 'div',
                  classNames: 'clock__flag',
                },
              ],
            },
          ],
        },
        {
          el: 'div',
          classNames: 'info',
          child: [
            {
              el: 'p',
              classNames: 'info__item',
              text: langStore === 'en' ? `${cities.city_en}` : `${cities.city_ru}`,
            },
            {
              el: 'p',
              classNames: 'info__item',
              text: langStore === 'en' ? `${cities.country_en}` : `${cities.country_ru}`,
            },
            {
              el: 'p',
              classNames: 'info__item',
              text: `GMT ${cities.utcTime < 0 ? cities.utcTime : `+${cities.utcTime}`}`,
            },
          ]
        }
      ],
    },
  ];  
}

export default cityClockTemplate;
