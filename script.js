function getValue(elementId){
    const targetedElement = document.getElementById(elementId);
    const valueParse = parseFloat(targetedElement.innerText);
    return valueParse;

}
function setValue(element, value){
    const a = document.getElementById(element).innerText;
    document.getElementById(element).innerText = value;
}

function showProductList(first){
   const parentConatiner = document.getElementById('product-list');
   const count = parentConatiner.childElementCount;
   const newElement = document.createElement("p");
   newElement.innerHTML= `${count+ 1} ${first}`
   parentConatiner.appendChild(newElement);

}


document.getElementById('card-one').addEventListener('click', function(){
   const cardOneAmount = getValue('card-one-amount');
   const totalPrice= getValue('total-price');
   const sum = cardOneAmount + totalPrice;
   const sumNumber = sum.toFixed(2);
   setValue('total-price', sumNumber);
   const productName = document.getElementById('nam-one').innerText;

   showProductList(productName);

})

document.getElementById('card-two').addEventListener('click', function(){
    const cardTwoAmount = getValue('card-two-amount');
    const totalPrice= getValue('total-price');
    const sum = cardTwoAmount + totalPrice;
    const sumNumber = sum.toFixed(2);
    setValue('total-price', sumNumber);
    const productName = document.getElementById('nam-two').innerText;

    showProductList(productName);

 })

 document.getElementById('card-three').addEventListener('click', function(){
    const cardthreeAmount = getValue('card-three-amount');
    const totalPrice= getValue('total-price');
    const sum = cardthreeAmount + totalPrice;
    const sumNumber = sum.toFixed(2);
    setValue('total-price', sumNumber);
    const productName = document.getElementById('nam-three').innerText;

    showProductList(productName);
 

 })

 document.getElementById('card-four').addEventListener('click', function(){
    const cardthreeAmount = getValue('card-four-amount');
    const totalPrice= getValue('total-price');
    const sum = cardthreeAmount + totalPrice;
    const sumNumber = sum.toFixed(2);
    setValue('total-price', sumNumber);
    const productName = document.getElementById('nam-four').innerText;

    showProductList(productName);

 })

 document.getElementById('card-five').addEventListener('click', function(){
    const cardthreeAmount = getValue('card-five-amount');
    const totalPrice= getValue('total-price');
    const sum = cardthreeAmount + totalPrice;
    const sumNumber = sum.toFixed(2);
    setValue('total-price', sumNumber);
    const productName = document.getElementById('nam-five').innerText;

    showProductList(productName);

 })

 document.getElementById('card-six').addEventListener('click', function(){
    const cardthreeAmount = getValue('card-six-amount');
    const totalPrice= getValue('total-price');
    const sum = cardthreeAmount + totalPrice;
    const sumNumber = sum.toFixed(2);
    setValue('total-price', sumNumber);
    const productName = document.getElementById('nam-six').innerText;

    showProductList(productName);
 

 })

 document.getElementById('apply').addEventListener('click', function(){
    const coupnValue = document.getElementById('coupn').value;
    if(coupnValue === 'SELL200'){
        const actualValue =getValue('total-price');
        const discountValue = actualValue * 0.2;
        const dicountedValue = actualValue -discountValue;
        const total = dicountedValue.toFixed(2);
        const valueTonumber = discountValue.toFixed(2);
        setValue('discount', valueTonumber);
        setValue('total', total)
    }
 })

document.addEventListener('click', function(){
 
    
    const a = document.getElementById('total-price').innerText;
    const b = parseFloat(a);
    if(b > 0){
    document.getElementById('make-purchase').removeAttribute('disabled'); 
    if(b >= 200){
        document.getElementById('apply').removeAttribute('disabled');
    }
}
})