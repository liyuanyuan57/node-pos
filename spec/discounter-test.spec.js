var PromotionCalculate = require('../main/module/promotion-calculate.js');
var CartItem = require('../main/module/cart-item.js');
var Promotion = require('../main/module/promotion.js');
var Discounter = require('../main/module/discounter.js');
var PromotionItem = require('../main/module/promotion-item.js');
var Cart = require('../main/module/cart.js');
var Item = require('../main/module/item.js');

describe('Discounter', function() {
  var discounter, cart, promotion;
  beforeEach(function() {
    var cart = new Cart();

    promotion = new Promotion('BUY_TWO_GET_ONE_FREE', [
      'ITEM000000',
      'ITEM000001',
    ]);

    cart.cartItems = [
      new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 5),
      new CartItem(new Item('ITEM000006', '桃子', '斤', 4.50), 2)
    ];

    discounter = new Discounter(cart, promotion);
  });

  describe('#getPromotionItems', function() {

    it('should be return promotionItems', function() {
      var promotioncalculate = new PromotionCalculate();
      var promotionItems = [
        new PromotionItem(new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 5), 1),
        new PromotionItem(new CartItem(new Item('ITEM000006', '桃子', '斤', 4.50), 2), 0)
      ];
      expect(discounter.getPromotionItems(promotioncalculate)).toEqual(promotionItems);
    });

  });

  describe('#getSaveTotal',function(){
      it('should be return a correct value',function(){
        discounter.promotionItems = [
           new PromotionItem(new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 5), 1),
           new PromotionItem(new CartItem(new Item('ITEM000000', '李子', '斤', 2.00), 3), 1)
        ]
        expect(discounter.getSaveTotal()).toBe(5);
      });
  });


});
