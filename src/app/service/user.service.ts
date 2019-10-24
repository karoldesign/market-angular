import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Food } from '../food/food.interface';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  food: Array<Food> = [
    { name: 'Chicken fillets', category: 'Meat & Poultry', price: 4.50, stock: 12, offert: null, voucher: false, description: '6 x 100g', coin: '£', foodId: 1 },
    { name: 'Sirolin Steaks', category: 'Meat & Poultry', price: 45.70, stock: 6, offert: 43.20, voucher: true,  description: '4 x 6oz', coin: '£', foodId: 2 },
    { name: 'Whole Free-Range Turkey', category: 'Meat & Poultry', price: 48.25, stock: 8, offert: null, voucher: false, description: '1 x 16-18lbs', coin: '£', foodId: 3 },
    { name: 'Grany Smith Apple', category: 'Fruit & Vegetables', price: 3.75, stock: 0, offert: null, voucher: false, description: '4 x 16 each', coin: '£', foodId: 4 },
    { name: 'Loose Carrots', category: 'Fruit & Vegetables', price: 2.67, stock: 2, offert: null, voucher: false, description: '6 x 10 x 12', coin: '£', foodId: 5 },
    { name: 'Mandarin Orange', category: 'Fruit & Vegetables', price: 12.23, stock: 8, offert: null, voucher: false, description: '10 x 500g', coin: '£', foodId: 6 },
    { name: 'Cauliflower Florets', category: 'Fruit & Vegetables', price: 6.75, stock: 5, offert: 5.0, voucher: true, description: '10 x 500g', coin: '£', foodId: 7 },
    { name: 'Coca-cola', category: 'Drinks', price: 8.50, stock: 6, offert: 8.20, voucher: true, description: '6 x 2L', coin: '£', foodId: 1 },
    { name: 'Still Mineral Water', category: 'Drinks', price: 21.17, stock: 9, offert: null, voucher: false, description: '6 x 24 x 500L', coin: '£', foodId: 8 },
    { name: 'Sparkling Mineral Water', category: 'Drinks', price: 25.83, stock: 16, offert: null, voucher: false, description: '6 x 24 x 500L', coin: '£', foodId: 9 },
    { name: 'Mars Bar', category: 'Confectionary & Desserts', price: 35.70, stock: 6, offert: null, voucher: false, description: '6 x 50 x 30L', coin: '£', foodId: 10 },
    { name: 'Peppermit Chewin Gun', category: 'Confectionary & Desserts', price: 8.52, stock: 0, offert: null, voucher: false, description: '4 x 12 portions', coin: '£', foodId: 11 },
    { name: 'Vanilla Ice Cream', category: 'Confectionary & Desserts', price: 3.80, stock: 2, offert: null, voucher: false, description: '6 x 4L', coin: '£', foodId: 12 },
    { name: 'Plain Flour', category: 'Baking/Cooking Ingredients', price: 6.21, stock: 4, offert: null, voucher: false, description: '10 x 1kg', coin: '£', foodId: 13 },
    { name: 'Icing Sugar', category: 'Baking/Cooking Ingredients', price: 9.38, stock: 6, offert: null, voucher: false, description: '12 x 500g', coin: '£', foodId: 14 },
    { name: 'Free-Range Eggs', category: 'Baking/Cooking Ingredients', price: 9.52, stock: 9, offert: null, voucher: false, description: '10 x 12each', coin: '£', foodId: 15 },
    { name: 'Caster Sugar', category: 'Baking/Cooking Ingredients', price: 12.76, stock: 13, offert: null, voucher: false, description: '16 x 750g', coin: '£', foodId: 16 },
    { name: 'Kitchen Roll', category: 'Miscellaeous Items', price: 43.92, stock: 19, offert: null, voucher: false, description: '100 x 300 sheets', coin: '£', foodId: 17 },
    { name: 'Paper Plates', category: 'Miscellaeous Items', price: 16.19, stock: 7, offert: null, voucher: false, description: '100 x 200 each', coin: '£', foodId: 18 },
  ];

  voucher: Array<object> = [{id: '20OFFPROMO'}];

  constructor() {}

  getFood() {
    return of(this.food);
  }

  getVoucher() {
    return of(this.voucher);
  }

}
