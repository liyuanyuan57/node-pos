var Scanner = require('./module/scanner.js');
var fixtures = require('./module/fixtures.js');
var Cart = require('./module/cart.js');
var Pos = require('./module/pos.js');
var CartItem = require('./module/cart-item.js');
var Utils = require('./module/utils.js');
var PromotionCalculate = require('./module/promotion-calculate.js');
var Discounter = require('./module/discounter.js');
var Promotion = require('./module/promotion.js');
var Receipt = require('./module/receipt.js');


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
  var receipt = new Receipt(discounter,utils);
  console.log(pos.print(receipt));
 }


 exports.printReceipt = printReceipt;
