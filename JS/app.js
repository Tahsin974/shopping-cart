

// update product number
function updateProductNumber(product,price,isAdd){
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if(isAdd==true){
        productNumber = parseInt(productNumber) + 1;    
    }
    else if(productNumber>0){
        productNumber = parseInt(productNumber) - 1;    
    }
    // update product Total
    productInput.value = productNumber;
    const productTotal = document.getElementById(product+'-total');
    
    productTotal.innerText = productNumber * price;

    // calculation
    getCalculateTotal();
    
}
// get input
function getInputValue(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
// update total
function getCalculateTotal(){
    const phoneTotal = getInputValue('phone') *1219;
    const caseTotal = getInputValue('case') *59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal/5;
    const total = subTotal + tax;
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = total;
}
// phone increase and decrease events 

// add event handler on phone Plus Button
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);
})
// add event handler on phone Minus Button
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
})

// case increase and decrease events 

// add event handler on case Plus Button
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true);
})
// add event handler on case Minus Button
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
})


