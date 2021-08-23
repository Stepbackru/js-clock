import elem from '../../assets/utils/createElement.js';
import langBlockTemplate from '../../data/langBlockTemplate.js';
import cityClocks from '../citiesClocks/citiesClocks.js';
import showDateGreating from '../showDateGreating/showDateGreating.js';

class SetLangApp {
  constructor() {
    this.elements = [];
    this.langBlock = null;
    this.engBtn = null;
    this.rusBtn = null;
    this.btns = null;

    this.langHandler = this.langHandler.bind(this);
    this.addBtnActiveClass = this.addBtnActiveClass.bind(this);
  }

  render() {
    this.createTemplate(langBlockTemplate);
    this.langBlock = this.elements.find((el) => el.className === 'lang');
    this.engBtn = this.elements.find((el) => el.classList.contains('lang__eng'));
    this.rusBtn = this.elements.find((el) => el.classList.contains('lang__rus'));
    this.btns = this.elements.filter((el) => el.classList.contains('lang__btn'));
  }
  
  subscribe() {
    this.langBlock.addEventListener('click', this.langHandler);
    this.addBtnActiveClass();
  }

  langHandler(e) {
    const engBtn = e.target.classList.contains('lang__eng');
    const rusBtn = e.target.classList.contains('lang__rus');
    const langStore = localStorage.getItem(`lang`);
    const contActClass = e.target.classList.contains('lang__btn_active');

    if (!contActClass) {
      if (engBtn || rusBtn) {
        this.btns.forEach((el) =>  el.classList.remove('lang__btn_active'));
        e.target.classList.add('lang__btn_active');
      }
    }

    if (engBtn) {
      if (langStore === 'ru') {
        localStorage.setItem(`lang`, `en`);

        cityClocks.destroy();
        showDateGreating.destroy();
        cityClocks.render();
        showDateGreating.render();
        showDateGreating.getToday();
        showDateGreating.setGreating();
      }
    }
    if (rusBtn) {
      if (langStore === 'en') {
        localStorage.setItem(`lang`, `ru`);
  
        cityClocks.destroy();
        showDateGreating.destroy();
        cityClocks.render();
        showDateGreating.render();
        showDateGreating.getToday();
        showDateGreating.setGreating();
      }
    }
  }

  addBtnActiveClass() {
    const langStore = localStorage.getItem(`lang`);

    if (langStore === 'en') {
      this.engBtn.classList.add('lang__btn_active');
    } else {
      this.rusBtn.classList.add('lang__btn_active');
    }
  }

  createTemplate(arr) {
    arr.forEach((elems) => {
      elem.add(elems);
    });
    this.elements = elem.getElements();
    elem.clearElements();
  }
}

const setLangApp = new SetLangApp();

export default setLangApp;
