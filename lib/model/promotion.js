var fixtures = require('./fixtures.js');

function Promotion(type, barcodes) {
  this.type = type;
  this.barcodes = barcodes || [];
}

Promotion.prototype.findPromotion = function(barcode){
  var fixtures = require('./fixtures.js');
  //var promotions = this.getPromotions();
  var promotions = fixtures.loadPromotions();
  for(var m = 0;m < promotions.length;m++){
    if(promotions[m].barcodes.indexOf(barcode) !== -1){
      return promotions[m];
    }
  }
}

/*Promotion.getPromotions = function(){
  return   fixtures.loadPromotions();
}
*/
module.exports = Promotion;
