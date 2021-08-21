import elem from '../../assets/utils/createElement.js';
import cityBlockTemplate from '../data/cityBlockTemplate.js';

class CityBlock {
  constructor() {
    this.elements = [];
  }

  render() {
    this.createTemplate(cityBlockTemplate);
  }

  destroy() {
    this.elements.forEach((el) => el.remove());
    this.elements = [];
  }

  createTemplate(arr) {
    arr.forEach((elems) => {
      elem.add(elems);
    });
    this.elements = elem.getElements();
    elem.clearElements();
  }
}

const cityBlock = new CityBlock();

export default cityBlock;
