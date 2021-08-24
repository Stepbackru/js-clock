import elem from '../../utils/createElement.js';
import cloudsBgTemplate from '../../../data/cloudsBgTemplate.js';

class CloudsTheme {
  constructor() {
    this.elements = [];
  }

  render() {
    this.createTemplate(cloudsBgTemplate);
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

const cloudsTheme = new CloudsTheme();

export default cloudsTheme;
