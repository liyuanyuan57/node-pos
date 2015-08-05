var Pos = require ('../main/module/pos.js');
var Cart = require ('../main/module/cart.js');
var Scanner = require ('../main/module/scanner.js');
var CartItem = require ('../main/module/cart-item.js');
var Item = require ('../main/module/item.js');
describe('pos',function(){
  describe('#scan',function(){
    it('should be return a correct cartItems',function(){
      var cart = new Cart();
      var scanner = new Scanner();
      var pos = new Pos(scanner,cart);
      tags = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
      ];
      pos.scan(tags);
      var cartItems = [
        new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 2),
        new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00), 2),
        new CartItem(new Item('ITEM000005', '方便面', '袋', 4.50), 1),
      ]
      expect(cart.cartItems).toEqual(cartItems);
    });

  });
});
