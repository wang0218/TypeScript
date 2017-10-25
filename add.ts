/// <reference path="node_modules/@types/jquery/index.d.ts" /> 
 
$(function(){
    $("#btn").click(function(){
      let price=$("#price").val() as number;
      let qty=$("#qty").val() as number;
      let level=$("#select").val() as string;
      var newcalculate:IDiscountCalculator= new PriceDiscount(price,qty ,level);
      var result= newcalculate.calculate();
      $("#result").val(result);
      
})
})

interface IDiscountCalculator{
    price:number;
    qty:number;
    level:string;
    calculate():number;
}
class PriceDiscount implements IDiscountCalculator{
    constructor
    ( public price: number, 
        public qty: number,
        public level:string
    ) { 
}
calculate(){
    var total=this.price*this.qty;
    if(this.level==="vip" && total>500){
      total=total*0.8;
    } 
    else if(this.level==="normal" && total>1000 && this.qty>3){
       total=total*0.85;
    }
    return total;
 }
}


