import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
    <div class="content" id="mainContent">
    <h2 class="content__heading">Restaurant</h2>
    <div id="restaurants" class="restaurants">
    </div>
    </div>
      `;
  },

  async afterRender() {
    const resto = await RestaurantDbSource.resto();
    const restoContainer = document.querySelector('#restaurants');
    resto.forEach((restaurant) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
