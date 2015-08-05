PromotionItem = require('./promotion-item.js');

function Discounter(cart,promotion){
  this.cart = cart;
  this.promotion = promotion;
  this.promotionItems = [];
}

Discounter.prototype.getPromotionItems = function(promotioncalculate){

  var discount = 0;
  for(var k = 0; k < this.cart.cartItems.length; k++){
    var existed = this.promotion.findPromotion(this.cart.cartItems[k].item.barcode);
    if(existed){
       discount = promotioncalculate.getDiscount(this.cart.cartItems[k], existed);
    } else {
      discount = 0;
    }
     this.promotionItems.push(new PromotionItem(this.cart.cartItems[k], discount));
  }

  return this.promotionItems;
};


Discounter.prototype.getSaveTotal = function(){
  var totalSavePrice = 0;

  this.promotionItems.forEach(function(promotionItem){
      totalSavePrice += promotionItem.getSubsave();
  });

  return totalSavePrice;
};

Discounter.prototype.getActualTotal = function(){
    return this.cart.getTotalPrice() - this.getSaveTotal();
};

module.exports = Discounter;
