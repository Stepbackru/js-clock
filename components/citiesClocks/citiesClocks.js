import elem from '../../assets/utils/createElement.js';
import cities from '../../data/cities.js';
import cityClockTemplate from '../../data/cityClockTemplate.js';

class CityClocks {
  constructor() {
    this.elements = [];
    this.deg = 6;
    this.hr = [];
    this.mn = [];
    this.sc = [];
    this.flag = [];

    this.setAnimationClocks = this.setAnimationClocks.bind(this);
  }

  render() {
    cities.forEach((el) => {
      this.createTemplate(cityClockTemplate('', el));
    });
    this.elements.forEach((arr) => {
      this.hr.push(arr.find((el) => el.className === 'clock__arrow-hr'));
      this.mn.push(arr.find((el) => el.className === 'clock__arrow-mn'));
      this.sc.push(arr.find((el) => el.className === 'clock__arrow-sc'));
      this.flag.push(arr.find((el) => el.className === 'clock__flag'));
    });
    
    cities.forEach((el, i) => {
      this.flag[i]
        .style.backgroundImage = `url(./assets/image/${el.country_en.toLowerCase()}.png)`;
    });
  }
  
  destroy(){
    this.elements.forEach((arr) => {
      arr.forEach((el) => el.remove());
    });
    this.elements = [];
    this.hr = [];
    this.mn = [];
    this.sc = [];
    this.flag = [];
  }
  
  subscribe() {
    this.setAnimationClocks();
    setTimeout(this.setAnimationClocks, 1000);
  }

  setAnimationClocks() {
    cities.forEach((el, i) => {
      const day = new Date();
      const hours = (day.getUTCHours() + el.utcTime) * 30;
      const mins = day.getMinutes() * this.deg;
      const secs = day.getSeconds() * this.deg;

      this.hr[i].style.transform = `rotateZ(${(hours) + (mins/12)}deg)`;
      this.mn[i].style.transform = `rotateZ(${mins}deg)`;
      this.sc[i].style.transform = `rotateZ(${secs}deg)`;
    })

    if (this.hr[0]) {
      requestAnimationFrame(this.setAnimationClocks);
    } else {
      requestAnimationFrame();
    }
  }

  createTemplate(arr) {
    arr.forEach((elems) => {
      elem.add(elems);
    });
    this.elements.push(elem.getElements());
    elem.clearElements();
  }
}

const cityClocks = new CityClocks();

export default cityClocks;
