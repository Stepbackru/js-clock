import mainClocksTemplate from '../data/mainClocksTemplate.js';
import elem from '../../assets/utils/createElement.js';

class ClockModal {
  constructor() {
    this.elements = [];
    this.deg = 6;
    this.hr = null;
    this.mn = null;
    this.sc = null;

    this.setAnimationClocks = this.setAnimationClocks.bind(this);
  }

  render() {
    this.createTemplate(mainClocksTemplate());
    this.hr = this.elements.find((el) => el.className === 'clock__arrow-hr');
    this.mn = this.elements.find((el) => el.className === 'clock__arrow-mn');
    this.sc = this.elements.find((el) => el.className === 'clock__arrow-sc');
  }

  destroy() {
    this.elements.forEach((el) => el.remove());
    this.elements = [];
  }

  subscribe() {
    this.setAnimationClocks();
    setTimeout(this.setAnimationClocks, 1000);
  }

  setAnimationClocks() {
    const day = new Date();
    const hours = day.getHours() * 30;
    const mins = day.getMinutes() * this.deg;
    const secs = day.getSeconds() * this.deg;

    this.hr.style.transform = `rotateZ(${(hours) + (mins/12)}deg)`;
    this.mn.style.transform = `rotateZ(${mins}deg)`;
    this.sc.style.transform = `rotateZ(${secs}deg)`;

    requestAnimationFrame(this.setAnimationClocks);
  }

  // private unsubscribe(): void  {

  // }

  createTemplate(arr) {
    arr.forEach((elems) => {
      elem.add(elems);
    });
    this.elements = elem.getElements();
    elem.clearElements();
  }
}

const mainClocks = new ClockModal();

export default mainClocks;
