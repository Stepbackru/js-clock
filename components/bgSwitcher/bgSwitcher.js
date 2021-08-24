import elem from '../../assets/utils/createElement.js';
import bgSwitchTemplate from '../../data/bgSwitchTemplate.js';
import showDateGreating from '../showDateGreating/showDateGreating.js';
import cloudsTheme from '../../assets/templates/clouds/cloudsTheme.js';
import spaceTheme from '../../assets/templates/space/spaceTheme.js';

class BgSwitcher {
  constructor() {
    this.elements = [];
    this.checkbox = null;

    this.setBasicTheme = this.setBasicTheme.bind(this);
  }

  render() {
    this.createTemplate(bgSwitchTemplate);
    this.checkbox = this.elements.find((el) => el.className === 'switcher__checkbox');
    this.setCheckbox();
  }

  destroy() {
    this.elements.forEach((el) => el.remove());
    this.elements = [];
  }

  subscribe() {
    this.checkbox.addEventListener('change', this.setBasicTheme);
  }

  setCheckbox() {
    const time = showDateGreating.getTimeOfDay();
    if (time === 'night' || time === 'evening') {
      this.checkbox.checked = true;
      cloudsTheme.destroy();
      spaceTheme.render();
    } else {
      this.checkbox.checked = false;
      spaceTheme.destroy();
      cloudsTheme.render();
    }
  }

  setBasicTheme() {
    if (this.checkbox.checked) {
      cloudsTheme.destroy();
      spaceTheme.render();
    } else {
      spaceTheme.destroy();
      cloudsTheme.render();
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

const bgSwitcher = new BgSwitcher();

export default bgSwitcher;
