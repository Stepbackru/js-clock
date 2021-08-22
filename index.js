import mainClocks from './components/mainClocks.js';
import cityBlock from './components/cityBlock.js';
import citiesClocks from './components/citiesClocks/citiesClocks.js';
import showDateGreating from './components/showDateGreating/showDateGreating.js';

class MainPage {
  
  render() {
    cityBlock.render();
    mainClocks.render();
    citiesClocks.render();
    showDateGreating.render();
  }

  subscribe() {
    mainClocks.subscribe();
    citiesClocks.subscribe();
    showDateGreating.subscribe();
  }
}

const main = new MainPage();

localStorage.setItem(`lang`, `en`);
main.render();

window.onload = () => {
  main.subscribe();
}
