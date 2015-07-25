var Scanner = require('./model/scanner.js');
var fixtures = require('./model/fixtures.js');
var Cart = require('./model/cart.js');
var Pos = require('./model/pos.js');
var CartItem = require('./model/cart-item.js');
var Utils = require('./model/utils.js');
var PromotionCalculate = require('./model/promotion-calculate.js');
var Processor = require('./model/processor.js');
var Promotion = require('./model/promotion.js');
var Receipt = require('./model/receipt.js');
var inputs = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'
    ];
/*function printReceipt(inputs){
    var scanner = new Scanner();
    var cart = new Cart();
    var pos = new Pos(scanner, cart);

    var promotion = new Promotion();
    pos.scan(tags);
    var processor = new Processor(cart,promotion);

    var promotioncalculate = new PromotionCalculate();
     processor.getPromotionItems(promotioncalculate);

    var utils = new Utils();
    var receipt = new Receipt(cart, processor,utils);
    console.log(pos.print(receipt));

 }*/

 var scanner = new Scanner();
 var cart = new Cart();
 var pos = new Pos(scanner, cart);
 var promotion = new Promotion();
 pos.scan(inputs);
   var processor = new Processor(cart,promotion);
 var promotioncalculate = new PromotionCalculate();
  processor.getPromotionItems(promotioncalculate);

 var utils = new Utils();
 var receipt = new Receipt(cart, processor,utils);
 console.log(pos.print(receipt));
