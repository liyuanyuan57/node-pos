var Scanner = require('./lib/scanner.js');
var fixtures = require('./lib/fixtures.js');
var Cart = require('./lib/cart.js');
var Pos = require('./lib/pos.js');
var CartItem = require('./lib/cart-item.js');
var Utils = require('./lib/utils.js');
var PromotionCalculate = require('./lib/promotion-calculate.js');
var Discounter = require('./lib/discounter.js');
var Promotion = require('./lib/promotion.js');
var Receipt = require('./lib/receipt.js');
var inputs = require('./tests/inputs.js');


function printReceipt(tags){
 var scanner = new Scanner();
 var cart = new Cart();
 var pos = new Pos(scanner, cart);
 var promotion = new Promotion();
 pos.scan(tags);

 var discounter = new Discounter(cart,promotion);
 var promotioncalculate = new PromotionCalculate();
 discounter.getPromotionItems(promotioncalculate);

 var utils = new Utils();
 var receipt = new Receipt(cart, discounter,utils);
 console.log(pos.print(receipt));
 }

 printReceipt(inputs);

 exports.printReceipt = printReceipt;
