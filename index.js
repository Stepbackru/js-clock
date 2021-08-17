import mainClocks from './components/mainClocks.js';

mainClocks.render();

window.onload = () => {
  mainClocks.subscribe();
}
