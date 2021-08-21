import mainClocks from './components/mainClocks.js';
import cityBlock from './components/cityBlock.js';
import citiesClocks from './components/citiesClocks/citiesClocks.js';

class MainPage {
  
  render() {
    cityBlock.render();
    mainClocks.render();
    citiesClocks.render();
  }

  subscribe() {
    mainClocks.subscribe();
    citiesClocks.subscribe();
  }
}

const main = new MainPage();

localStorage.setItem(`lang`, `en`);
main.render();

window.onload = () => {
  main.subscribe();
}
