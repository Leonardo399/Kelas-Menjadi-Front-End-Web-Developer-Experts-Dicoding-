const iconToggler = document.getElementsByClassName('icon-toggler')[0];
const navbarNav = document.getElementsByClassName('navbar-nav')[0];
const nav = document.getElementsByTagName('nav')[0];
const navLinks = navbarNav.querySelectorAll('ul li a');
const listRestaurant = document.getElementsByClassName('list-restaurant')[0];
import data from '../../DATA.json';
const dataRestaurants = data.restaurants;

const main = () => {
  // event ketika icon toggle navbar di klik (event navbar collapse)
  iconToggler.addEventListener('click', function () {
    navbarNav.classList.toggle('active');
    nav.classList.toggle('nav-active');

    setTabIndex(window.innerWidth);
  })


  /* event mengembalikan height tag <nav> dan <ul> 
   seperti semula demgan menghapus kelas active|nav-active 
   jika masih ada di dalam element */
  window.addEventListener('resize', function () {
    if (this.innerWidth > 900) {
      if (navbarNav.classList.contains('active')) {
        navbarNav.classList.toggle('active');
      }
      if (nav.classList.contains('nav-active')) {
        nav.classList.toggle('nav-active');
      }
    }

    setTabIndex(this.innerWidth);
  })

  const setTabIndex = (windowWidth = 0) => {
    navLinks.forEach((navLink) => {
      if (windowWidth < 900) {
        if (navbarNav.classList.contains('active')) {
          navLink.removeAttribute('tabindex');
        } else {
          navLink.setAttribute('tabindex', '-1')
        }
      } else {
        navLink.removeAttribute('tabindex')
      }
    })
  }

  window.addEventListener('DOMContentLoaded', function () {
    if (this.innerWidth < 900) {
      setTabIndex(this.innerWidth);
    }

    listRestaurant.innerHTML = '';

    dataRestaurants.forEach((data) => {
      listRestaurant.innerHTML += createCardElement(data);
    })
  })

  const createCardElement = ({
    city = 'city',
    pictureId = 'image',
    rating = 0,
    name = 'name restaurant',
    description = 'description'
  }) => {
    return `
    <div class="card" aria-label="restaurant" tabindex="0">
      <div class="card-header">
          <img src="${pictureId}" alt="${name} image">
          <span class="tag" tabindex="0">${city}</span>
      </div>
      <div class="card-body">
          <p class="rating" tabindex="0">Rating : ${rating} of 5 <i class="fa fa-star" aria-hidden="true"></i>
          </p>
          <h3 tabindex="0">${name}</h3>
          <p tabindex="0">${description}</p>
      </div>
  </div>
    `
  }

}

export default main;