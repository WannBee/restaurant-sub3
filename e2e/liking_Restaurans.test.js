const assert = require('assert');

Feature('like n unlike a Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});
Scenario('like n unlike a resto', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-name');
  const Restaurant = locate('.restaurant-name').first();
  const RestaurantName = await I.grabTextFrom(Restaurant);
  I.click(Restaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant_like__name');

  const likeRestaurantName = await I.grabTextFrom('.restaurant_like__name');

  assert.strictEqual(RestaurantName, likeRestaurantName);

  I.seeElement('#navigationDrawer', 'a[href="#/like"]');
  I.click('a[href="#/like"]');

  I.seeElement('.restaurant_like__name');
  const likeResto = locate('.restaurant_like__name').first();
  const likeRestoName = await I.grabTextFrom(likeResto);

  I.click(likeResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.seeElement('#navigationDrawer', 'a[href="#/like"]');
  I.click('a[href="#/like"]');

  I.dontSee(likeRestoName);
});
