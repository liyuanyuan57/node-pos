function Receipt(discounter,utils){
this.discounter = discounter;
this.utils = utils;
}

Receipt.prototype.getItemsString = function(){
  var itemString = '';
  var promotionItems = this.discounter.promotionItems;
  promotionItems.forEach(function(promotionItem){
    var actualSub = (promotionItem.cartItem.count - promotionItem.discount)*(promotionItem.cartItem.item.price);
    itemString +=  '名称' + '：'+ promotionItem.cartItem.item.name + '，'+
                   '数量' + '：' + promotionItem.cartItem.count +promotionItem.cartItem.item.unit + '，'+
                   '单价' + '：' + formatPrice(promotionItem.cartItem.item.price) + '(元)' + '，' +
                   '小计' + '：' +formatPrice(actualSub) + '(元)' +'\n';
  });
 return itemString;
};

function formatPrice(price) {
  return price.toFixed(2);
}

Receipt.prototype.getReciptString = function(){
  var receipt = '***<没钱赚商店>收据***' + '\n'+
                '打印时间：' + this.utils.getCurrentDate() + '\n' +
                 '----------------------\n' + this.getItemsString()+
                 '----------------------\n' +
                 '总计'+ '：'+ formatPrice(this.discounter.getActualTotal()) + '(元)' +
                 '\n节省'+ '：'+ formatPrice(this.discounter.getSaveTotal()) + '(元)' +
                 '\n**********************';
  return receipt;
}

module.exports = Receipt;
