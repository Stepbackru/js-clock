import mainClocks from './components/mainClocks.js';
import cityBlock from './components/cityBlock.js';
import citiesClocks from './components/citiesClocks/citiesClocks.js';
import showDateGreating from './components/showDateGreating/showDateGreating.js';
import setUserName from './components/setUserName/setUserName.js';
import setLangApp from './components/setLangApp/setLangApp.js';
import bgSwitcher from './components/bgSwitcher/bgSwitcher.js';
import spaceTheme from './assets/templates/space/spaceTheme.js';

class MainPage {
  constructor() {
    this.userNameStore = localStorage.getItem(`username`);
  }
  
  render() {
    bgSwitcher.render();
    cityBlock.render();
    citiesClocks.render();
    mainClocks.render();
    setLangApp.render();
    showDateGreating.render();

    if (!this.userNameStore) {
      setUserName.render();
    }
  }

  subscribe() {
    bgSwitcher.subscribe();
    mainClocks.subscribe();
    citiesClocks.subscribe();
    setLangApp.subscribe();
    showDateGreating.subscribe();

    if (!this.userNameStore) {
      setUserName.subscribe();
    }
  }
}

const main = new MainPage();

localStorage.setItem(`lang`, `en`);
main.render();

window.onload = () => {
  main.subscribe();
}
