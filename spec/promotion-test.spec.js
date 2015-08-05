var Promotion = require ('../main/module/promotion.js');


describe('Promotion',function(){
  describe('#findPromotion',function(){
     var promotion;
      beforeEach(function(){
       promotion = new Promotion();
        spyOn(promotion,'getPromotions').and.returnValue([
          new Promotion('BUY_TWO_GET_ONE_FREE', [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
          ])
        ]);
      });
      it('should return a promotion',function(){
        expect(promotion.findPromotion('ITEM000001')).toEqual(new Promotion('BUY_TWO_GET_ONE_FREE', [
          'ITEM000000',
          'ITEM000001',
          'ITEM000005'
        ]));
      });
      it('should return undefined',function(){
        expect(promotion.findPromotion('ITEM000004')).toEqual(undefined);
      });
  });
});
