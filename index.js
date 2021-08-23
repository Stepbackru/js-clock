import mainClocks from './components/mainClocks.js';
import cityBlock from './components/cityBlock.js';
import citiesClocks from './components/citiesClocks/citiesClocks.js';
import showDateGreating from './components/showDateGreating/showDateGreating.js';
import setUserName from './components/setUserName/setUserName.js';

class MainPage {
  constructor() {
    this.userNameStore = localStorage.getItem(`username`);
  }
  
  render() {
    cityBlock.render();
    mainClocks.render();
    citiesClocks.render();
    showDateGreating.render();

    if (!this.userNameStore) {
      setUserName.render();
    }
  }

  subscribe() {
    mainClocks.subscribe();
    citiesClocks.subscribe();
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
