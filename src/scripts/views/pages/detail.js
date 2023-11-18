import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <main id="mainContent" tabindex="0"></main>
    <h2>Detail Pages</h2>
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailResto(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        pictureId: restaurant.restaurant.pictureId,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        ratings: restaurant.restaurant.rating,
      },
    });
  },
};

export default Detail;
