var Cart = require('../main/module/cart.js');
var CartItem = require('../main/module/cart-item.js');
var Item = require('../main/module/item.js');

describe('Cart', function() {
  var cart;
  beforeEach(function() {
    cart = new Cart();
    cart.cartItems = [
      new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 1),
      new CartItem(new Item('ITEM000002', '苹果', '斤', 5.50), 1),
      new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00), 2)
    ];
  });


  describe('#findCartItem', function() {
    it('should return a cartItem by barcode', function() {
      expect(cart.findCartItem(cart.cartItems, 'ITEM000002')).toEqual(cart.cartItems[1]);
    });
    it('should return undefined by barcode', function() {
      expect(cart.findCartItem(cart.cartItems, 'ITEM000000')).toEqual(undefined);
    });
  });

  describe('#addCartItem', function() {
    it('the count of an existed cartItem should add', function() {
      var cartItem = new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 1);
      spyOn(cart,'findCartItem').and.returnValue(cart.cartItems[0]);
      cart.addCartItem(cartItem);
      expect(cart.cartItems[0].count).toBe(2);
    });
    it('an not existed cartItem should be push', function() {
      var cartItem = cart.addCartItem(new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00), 2));
      expect(cart.cartItems[3]).toEqual(cartItem);
    });
  });
  describe('#getTotalPrice',function(){
    it('should return a correct price',function(){
      expect(cart.getTotalPrice()).toBe(38.5);
    });

  });
});
