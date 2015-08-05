var Scanner = require ('../main/module/scanner.js');
var CartItem = require('../main/module/cart-item.js');
var Item = require ('../main/module/item.js');

describe('Scanner',function(){
  describe('#scan()',function(){
     var scanner;
     beforeEach(function() {
        scanner = new Scanner();
     });

     it('should return a cartItem and the count of it is 1',function(){

          var cartItem = new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00),1)
          expect(scanner.scan('ITEM000001')).toEqual(cartItem);
     });

     it('should return a cartItem and the count of it is >1 ',function(){
          var cartItem = new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00),2)
          expect(scanner.scan('ITEM000003-2')).toEqual(cartItem);
     });

  });

});
