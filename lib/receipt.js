function Receipt(cart, discounter,utils){
this.cart = cart;
this.discounter = discounter;
this.utils = utils;
}

Receipt.prototype.getItemsString = function(){
  var itemString = '';
  var _this = this;
  var cartItems = this.cart.cartItems;
  cartItems.forEach(function(cartItem){
    itemString +=  '名称' + '：'+ cartItem.item.name + '，'+
                   '数量' + '：' + cartItem.count +cartItem.item.unit + '，'+
                   '单价' + '：' + formatPrice(cartItem.item.price) + '(元)' + '，' +
                   '小计' + '：' +formatPrice(_this.discounter.getActualSub(cartItem)) + '(元)' +'\n';
  });
 return itemString;
};

function formatPrice(price) {
  return price.toFixed(2);
}

Receipt.prototype.getPromotionString = function(){
  var promotionString = '';
  var promotions = this.discounter.promotionItems;

  promotions.forEach(function(promotion){
    promotionString +=  '名称' + '：'+ promotion.item.name + '，'+
                        '数量' + '：' + promotion.discount + promotion.item.unit + '\n';

  });
  
  return promotionString;
}

Receipt.prototype.getReciptString = function(){
  var receipt = '***<没钱赚商店>收据***' + '\n'+
                '打印时间：' + this.utils.getCurrentDate() + '\n' +
                 '----------------------\n' + this.getItemsString()+
                 '----------------------' + '\n'+
                 '挥泪赠送商品：\n' +this.getPromotionString()+
                 '----------------------' + '\n'+
                 '总计'+ '：'+ formatPrice(this.discounter.getActualTotal()) + '(元)' +
                 '\n节省'+ '：'+ formatPrice(this.discounter.getSaveTotal()) + '(元)' +
                 '\n**********************';
  return receipt;
}

module.exports = Receipt;
