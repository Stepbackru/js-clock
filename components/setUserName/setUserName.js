import elem from '../../assets/utils/createElement.js';
import setUserNameTemplate from '../../data/setUserNameTemplate.js';
import showDateGreating from '../showDateGreating/showDateGreating.js';

class SetUserName {
  constructor() {
    this.elements = [];
    this.inputName = null;
    this.nameBlock = null;
    this.nameBtn = null;

    this.setNameAfterSubmit = this.setNameAfterSubmit.bind(this);
    this.removeBlockAfterSetName = this.removeBlockAfterSetName.bind(this);
  }

  render() {
    this.createTemplate(setUserNameTemplate());
    this.nameBlock = this.elements.find((el) => el.className === 'name');
    this.inputName = this.elements.find((el) => el.className === 'name__input');
    this.nameBtn = this.elements.find((el) => el.className === 'name__submit');
  }
  
  destroy(){
    this.elements.forEach((el) => el.remove());
    this.elements = [];
  }
  
  subscribe() {
    this.inputName.addEventListener('keyup', this.setNameAfterSubmit);
    this.nameBtn.addEventListener('click', this.setNameAfterSubmit);
    this.nameBlock.addEventListener('transitionend', this.removeBlockAfterSetName);
  }

  unsubscribe() {
    this.inputName.removeEventListener('keyup', this.setNameAfterSubmit);
    this.nameBtn.removeEventListener('click', this.setNameAfterSubmit);
    this.nameBlock.removeEventListener('transitionend', this.removeBlockAfterSetName);
  }

  setNameAfterSubmit(e) {
    const item = e.target;
    const btnSumbit = item.classList.contains('name__submit');

    if (e.key === 'Enter' || e.code === 'Enter' || btnSumbit) {
      const result = this.inputName.value.trim();
      
      if (result.length && this.inputName.checkValidity()) {
        localStorage.setItem(`username`, `${result}`);
        this.nameBlock.classList.add('name_disable');
        
        showDateGreating.setGreating();
      }
    }
  }

  removeBlockAfterSetName() {
    this.destroy();
    setTimeout(() => this.unsubscribe, 500);
  }

  createTemplate(arr) {
    arr.forEach((elems) => {
      elem.add(elems);
    });
    this.elements = elem.getElements();
    elem.clearElements();
  }
}

const setUserName = new SetUserName();

export default setUserName;
