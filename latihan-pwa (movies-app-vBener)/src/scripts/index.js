import 'regenerator-runtime';
import '../styles/style.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import CONFIG from './globals/config';
import webSocketInitiator from './utils/websocket-initiator';
import img from '../public/hero-image.jpg';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  const box = document.querySelector('.box');
  console.log(box);
  box.style.backgroundImage = `url(${img})`;
  swRegister();
  webSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});