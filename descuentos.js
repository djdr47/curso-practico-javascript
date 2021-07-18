// arreglo de cupones.
const coupons = [
    {namec : "cupon_1", valuec :  15}, 
    {namec : "cupon_2", valuec: 30}, 
    {namec : "cupon_3", valuec : 20}
    ];





function calcularPrecioConDescuento(precio, cuponDescuento){

    // validar si el cupon es válido retorna true or false
    const couponValid  = coupons.find(function (coupon) {
        return coupon.namec === cuponDescuento;
    });

    if(!couponValid){
        alert("El cupon (" + cuponDescuento + ") no es válido");
    }
    else {
        //alert("cupon: " + couponValid.namec + ", valor: " +couponValid.valuec);
        const porcentajePrecioConDescuento = 100 - couponValid.valuec;
        const precioConDescuento = (precio * porcentajePrecioConDescuento )/ 100;
        return precioConDescuento;

    }    

}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscountCoupon = document.getElementById("InputDiscountCoupon");
    
    valuePrice = inputPrice.value;
    valueDiscountCoupon = inputDiscountCoupon.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscountCoupon);
    const resultP = document.getElementById("ResultP");
    resultP.innerHTML = "El precio con descuento es de: $"+ precioConDescuento;    
}

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/

