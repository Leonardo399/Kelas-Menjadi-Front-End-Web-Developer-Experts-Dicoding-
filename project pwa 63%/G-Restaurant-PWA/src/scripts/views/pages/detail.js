import TheRestaurantsSource from '../../data/therestaurants-source';
import {
  createRestaurantDetailsTemplate,
} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <header>
      <h2 tabindex="0">Detail Restaurant</h2>
    </header>
    <div class="wrapper" tabindex="-1">
    
    </div>
    <article-item></article-item>
    `;
  },

  async afterRender() {
    const wrapper = document.querySelector('.wrapper');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetails = await TheRestaurantsSource.restaurantDetails(url.id);
    wrapper.appendChild(createRestaurantDetailsTemplate(restaurantDetails));
    window.scrollTo(0, 480);

    LikeButtonInitiator.init({
      buttonLike: document.querySelector('.btn-favorite'),
      restaurant: restaurantDetails,
    });
  },
};

export default Detail;
