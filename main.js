var Scanner = require('./lib/scanner.js');
var fixtures = require('./lib/fixtures.js');
var Cart = require('./lib/cart.js');
var Pos = require('./lib/pos.js');
var CartItem = require('./lib/cart-item.js');
var Utils = require('./lib/utils.js');
var PromotionCalculate = require('./lib/promotion-calculate.js');
var Processor = require('./lib/processor.js');
var Promotion = require('./lib/promotion.js');
var Receipt = require('./lib/receipt.js');
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
