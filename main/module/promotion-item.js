function PromotionItem(cartItem,discount){
  this.cartItem = cartItem;
  this.discount = discount;
}

PromotionItem.prototype.getSubsave = function(){
  return  this.discount * this.cartItem.item.price;
}

module.exports = PromotionItem;
