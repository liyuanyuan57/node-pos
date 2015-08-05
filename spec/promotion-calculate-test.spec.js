var PromotionCalculate = require('../main/module/promotion-calculate.js');
var CartItem = require ('../main/module/cart-item.js');
var Promotion = require ('../main/module/promotion.js');
var Cart = require ('../main/module/cart.js');
var PromotionItem = require('../main/module/promotion-item.js');
var Item = require('../main/module/item.js');

describe('PromotionCalculate',function(){
  var promotion,promotionCalculate;
  beforeEach(function(){
     promotion = new Promotion('BUY_TWO_GET_ONE_FREE', ['ITEM000003']);
     promotionCalculate = new PromotionCalculate();
  });
  describe('#getDiscount',function(){
     it('should be return 0 when the original count less than 3',function(){
       var cartItem = new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00), 2);
       expect(promotionCalculate.getDiscount(cartItem,promotion)).toBe(0);
     });
     it('should be return 0 when the original count less than 3',function(){
       var cartItem = new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00), 5);
       expect(promotionCalculate.getDiscount(cartItem,promotion)).toBe(1);
     });

  });
});
