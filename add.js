"use strict";
/// <reference path="node_modules/@types/jquery/index.d.ts" /> 
$(function () {
    $("#btn").click(function () {
        var price = $("#price").val();
        var qty = $("#qty").val();
        var level = $("#select").val();
        var newcalculate = new PriceDiscount(price, qty, level);
        var result = newcalculate.calculate();
        $("#result").val(result);
    });
});
var PriceDiscount = /** @class */ (function () {
    function PriceDiscount(price, qty, level) {
        this.price = price;
        this.qty = qty;
        this.level = level;
    }
    PriceDiscount.prototype.calculate = function () {
        var total = this.price * this.qty;
        if (this.level === "vip" && total > 500) {
            total = total * 0.8;
        }
        else if (this.level === "normal" && total > 1000 && this.qty > 3) {
            total = total * 0.85;
        }
        return total;
    };
    return PriceDiscount;
}());
