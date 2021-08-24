import elem from '../../assets/utils/createElement.js';
import showDateTemplate from '../../data/showDateTemplate.js';
import { TIME_LANG } from '../../assets/utils/constants.js'

class ShowDateGreating {
  constructor() {
    this.elements = [];
    this.greating = null;
    this.time = null;
    this.today = null;

    this.getTime = this.getTime.bind(this);
  }

  render() {
    this.createTemplate(showDateTemplate);
    this.greating = this.elements.find((el) => el.className === 'date__greating');
    this.time = this.elements.find((el) => el.className === 'date__time');
    this.today = this.elements.find((el) => el.className === 'date__today');
  }
  
  destroy(){
    this.elements.forEach((el) => el.remove());
    this.elements = [];
    this.greating = null;
    this.time = null;
    this.today = null;
  }
  
  subscribe() {
    this.getToday();
    this.setGreating();
    
    this.getTime();
    setTimeout(this.getTime, 1000);
  }

  getToday() {
    const langStore = localStorage.getItem(`lang`);
    const langStoreUP = langStore.toLocaleUpperCase();

    const today = new Date();
    const dayMonth = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    const dayOfWeek = {
      weekday: 'long'
    };

    const dateMonth = today.toLocaleDateString(`${langStore}-${langStoreUP}`, dayMonth);
    const day = today.toLocaleDateString(`${langStore}-${langStoreUP}`, dayOfWeek);

    this.today.textContent = `${day}, ${dateMonth}`;
  }

  getTimeOfDay() {
    const langStore = localStorage.getItem(`lang`);

    const today = new Date();
    const hour = today.getHours();
    let time = '';

    switch(true) {
      case (hour < 12 && hour > 6):
        time = `${TIME_LANG.find(elem => elem.en === 'morning')
                            [`${langStore}`]}`;
        break;
      case (hour >= 12 && hour < 18):
        time = `${TIME_LANG.find(elem => elem.en === 'day')
                            [`${langStore}`]}`;
        break;
      case (hour >= 18 && hour < 24):
        time = `${TIME_LANG.find(elem => elem.en === 'evening')
                            [`${langStore}`]}`;
        break;
      case (hour >= 0 && hour < 6):
        time = `${TIME_LANG.find(elem => elem.en === 'night')
                            [`${langStore}`]}`;
        break;
    }
    
    return time;
  }

  setGreating() {
    const langStore = localStorage.getItem(`lang`);
    const userNameStore = localStorage.getItem(`username`);

    this.greating.textContent = 
    `${langStore === 'en' ? 'Good' : ''} ${this.getTimeOfDay()}${userNameStore ? 
      `, ${userNameStore}` : ''}.`;
  }

  getTime() {
    const today = new Date();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
  
    this.time.textContent = `${this.addZero(hour)}:${this.addZero(min)}:${this.addZero(sec)}`;

    requestAnimationFrame(this.getTime);
  }

  addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  createTemplate(arr) {
    arr.forEach((elems) => {
      elem.add(elems);
    });
    this.elements = elem.getElements();
    elem.clearElements();
  }
}

const showDateGreating = new ShowDateGreating();

export default showDateGreating;
