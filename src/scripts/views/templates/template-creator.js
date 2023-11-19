import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
  <h1 class="restaurant__title">${restaurant.restaurant.name}</h1>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" crossorigin="anonymous" >
  <p>${restaurant.restaurant.description}</p>
  <div class="restaurant__info">
    <h2>Information</h2>
    <h3>City</h3>
    <p>${restaurant.restaurant.city}</p>
    <h3>Address</h3>
    <p>${restaurant.restaurant.address}</p>
    <h3>Foods</h3>
    <h4 class="menu-detail">Makanan</h4>
        <ul>
        <li><p>${restaurant.restaurant.menus.foods.map((food) => food.name).join(' <li> ')}</p></li>
        </ul>
    <h4 class="menu-detail">Minuman</h4>
    <ul>
    <li><p>${restaurant.restaurant.menus.drinks.map((drink) => drink.name).join(' <li> ')}</p></li>
    </ul>
    <h3>Rating</h3>
    <p>⭐️${restaurant.restaurant.rating}</p>
    <h2>Customer Review</h2>
    <p>${restaurant.restaurant.customerReviews.map((review) => `
    <h4>Oleh: ${review.name} (${review.date})</h4>
    <p>"${review.review}"</p>
    `).join('')}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload restaurant-item__header__poster" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant-name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;
const createLikeItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.ratings}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant_like__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.city}</p>
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this Restaurants" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this Restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
