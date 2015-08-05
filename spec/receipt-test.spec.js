var Discounter = require('../main/module/discounter.js');
var Utils = require('../main/module/utils.js');
var Receipt = require('../main/module/receipt.js');
var CartItem = require('../main/module/cart-item.js');
var Item = require('../main/module/item.js');

describe('Utils', function() {
  var discounter, utils, receipt;
  beforeEach(function() {
    discounter = new Discounter();
    utils = new Utils();
    receipt = new Receipt(discounter, utils);
    discounter.promotionItems = [
      new PromotionItem(new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 5), 1),
      new PromotionItem(new CartItem(new Item('ITEM000000', '李子', '斤', 2.00), 2), 0)
    ]
  });

  describe('#getItemsString', function() {
    it('should be return correct string', function() {
      var expectString = '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
        '名称：李子，数量：2斤，单价：2.00(元)，小计：4.00(元)\n';
      expect(receipt.getItemsString()).toEqual(expectString);

    });

  });

  describe('#getReciptString', function() {
    it('should be return correct string', function() {
      spyOn(utils,'getCurrentDate').and.returnValue('2015年2月20日18：23：56');
      spyOn(discounter,'getActualTotal').and.returnValue(16);

      var expectString = '***<没钱赚商店>收据***\n' +
        '打印时间：' + utils.getCurrentDate() + '\n' +
        '----------------------\n' +
        '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
          '名称：李子，数量：2斤，单价：2.00(元)，小计：4.00(元)\n'+
        '----------------------\n' +
        '总计：16.00(元)\n' +
        '节省：3.00(元)\n' +
        '**********************';

      expect(receipt.getReciptString()).toEqual(expectString);

    });

  });
});
