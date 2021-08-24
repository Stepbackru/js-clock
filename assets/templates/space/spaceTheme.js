import elem from '../../utils/createElement.js';
import spaceBgTemplate from '../../../data/spaceBgTemplate.js';

class SpaceTheme {
  constructor() {
    this.elements = [];
  }

  render() {
    this.createTemplate(spaceBgTemplate);
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

const spaceTheme = new SpaceTheme();

export default spaceTheme;
