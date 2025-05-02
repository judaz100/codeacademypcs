const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck){
      if(typeof mealToCheck === 'string')  {
        this._meal = mealToCheck;
        return this._meal;
      } else {
        console.log ('Type of variable inadequate')
      }
    },
    set price(priceToCheck){
      if(typeof priceToCheck === 'number') {
        this._price = priceToCheck;
        return priceToCheck;
      } else {
        console.log ('Type of variable inadequate')
      }
    },
    get todaysSpecial(){
      if (this._price && this._meal) {
        return `Today's special is ${this._meal} for $${this._price}`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    },
  
  }
  
  menu.price = 10;
  menu.meal='sale';
  
  //menu._meal = 10;
  //menu._price= 'sale';
  
  console.log(menu);
  console.log(menu.todaysSpecial)