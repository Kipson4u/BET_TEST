//import uuid from 'uuid/v4';

export interface IBasket {
  id: string;
  items: BasketItem[];
  clientSecret?: string;
  paymentIntendId?: string;
  deliveryMethodId?: number;
  shippingPrice?: number;
  
}

export interface BasketItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
}

export class Basket implements IBasket{
    id = Guid.newGuid();
    items: BasketItem[] = [];

}

export interface BasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}

class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

