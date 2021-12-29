class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    if (!this._restaurant) {
      this.renderError('Detail Restaurant Is Not Found!, please check your Internet Connection!');
    } else {
      this.setAttribute('class', 'detail-restaurant');

      const {
        customerReviews,
      } = this._restaurant;
      const {
        foods,
        drinks,
      } = this._restaurant.menus;
      let reviewsStringElement = '';
      const foodsMenus = foods.map((food) => food.name);
      const drinksMenus = drinks.map((drink) => drink.name);

      customerReviews.forEach((reviewer) => {
        reviewsStringElement += `
        <div class="reviewer">
          <p class="name">${reviewer.name}</p>
          <p>${reviewer.review}</p>
          <p class="date">${reviewer.date}</p>
        </div>
        `;
      });

      this.innerHTML = `
      <button class="btn-close"><a href="/"><i class="fas fa-times"></i></a></button>
  
      <div class="detail-image">
        <img src="https://restaurant-api.dicoding.dev/images/medium/${this._restaurant.pictureId}" alt="restaurant image">
        <button class="btn-favorite"><i class="fas fa-heart"></i></button>
        <button class="btn-add-review"><a href="#/review/${this._restaurant.id}">Add Review</a></button>
      </div>
      <div class="info">
        <h3 tabindex="0">Restaurant : ${this._restaurant.name}</h3>
        <p tabindex="0"><b>City</b> : ${this._restaurant.city}</p>
        <p tabindex="0"><b>Address</b> : ${this._restaurant.address}</p>
        <p tabindex="0"><b>Foods Menus</b> : ${foodsMenus.join(', ')}</p>
        <p tabindex="0"><b>Drinks Menus</b> : ${drinksMenus.join(', ')}</p>
        <p tabindex="0"><b>Description</b> : ${this._restaurant.description}</p>
        <h4 tabindex="0">Reviews </h4>
        <div class="reviews">
  
          ${reviewsStringElement}
          
        </div>
      </div>
      `;
    }
  }

  renderError(message) {
    this.innerHTML = `<h2 style="text-align:center; color: gray;">${message}</h2>`;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
