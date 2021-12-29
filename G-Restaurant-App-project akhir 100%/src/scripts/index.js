import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome.min';
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/app-bar';
import './components/article-item';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';

import App from './views/app';

const loadingElement = document.querySelector('.loading');

const app = new App({
  button: document.getElementsByClassName('icon-toggler')[0],
  drawer: {
    nav: document.getElementsByTagName('nav')[0],
    navbarNav: document.getElementsByClassName('navbar-nav')[0],
  },
  content: document.getElementById('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  setTimeout(() => {
    loadingElement.style.display = 'none';
  }, 100);
});
