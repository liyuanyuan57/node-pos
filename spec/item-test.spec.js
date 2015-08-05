var Item = require ('../main/module/item.js');


describe('Item',function(){
  describe('#findItem()',function(){
     var item;
      beforeEach(function(){
       item = new Item();
        spyOn(item,'getAllItems').and.returnValue([
          new Item('ITEM000002', '苹果', '斤', 5.50),
          new Item('ITEM000003', '荔枝', '斤', 15.00),
        ]);
      });
      it('should return a Item',function(){
        expect(item.findItem('ITEM000002')).toEqual(new Item('ITEM000002', '苹果', '斤', 5.50));
      });
      it('should return undefined',function(){
        expect(item.findItem('ITEM000004')).toEqual(undefined);
      });
  });
});
