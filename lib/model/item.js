module.exports = Item;
function Item(barcode, name, unit, price) {
  this.barcode = barcode;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;
}

Item.prototype.findItem = function(barcode){
//  var allItems = this.getAllItems();

  var allItems = fixtures.loadAllItems();
  for(var i = 0; i < allItems.length; i++){
    if(allItems[i].barcode === barcode){
      return allItems[i];
     }
  }
};

/*Item.getAllItems = function(){
var fixtures = require('./fixtures.js');
  return fixtures.loadAllItems();
};
*/

var fixtures = require('./fixtures.js');
