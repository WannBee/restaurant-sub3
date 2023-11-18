import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createLikeItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <main id="mainContent" tabindex="0"></main>
    <div class="content">
      <h2 class="content__heading">Liked Restaurants</h2>
      <div id="restaurants" class="restaurants">
 
      </div>
    </div>
  `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');

    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createLikeItemTemplate(restaurants);
    });
  },
};

export default Like;
