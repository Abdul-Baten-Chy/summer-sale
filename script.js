function getValue(elementId){
    const targetedElement = document.getElementById(elementId);
    const valueParse = parseFloat(targetedElement.innerText);
    return valueParse;

}
function setValue(element, value){
    const a = document.getElementById(element).innerText;
    document.getElementById(element).innerText = value;
}


document.getElementById('card-one').addEventListener('click', function(){
   const cardOneAmount = getValue('card-one-amount');
   const totalPrice= getValue('total-price');
   const sum = cardOneAmount + totalPrice;
   const sumNumber = sum.toFixed(2);
   setValue('total-price', sumNumber);

  
})

document.getElementById('card-two').addEventListener('click', function(){
    const cardTwoAmount = getValue('card-two-amount');
    const totalPrice= getValue('total-price');
    const sum = cardTwoAmount + totalPrice;
    const sumNumber = sum.toFixed(2);
    setValue('total-price', sumNumber);
 

 })

 document.getElementById('card-three').addEventListener('click', function(){
    const cardthreeAmount = getValue('card-three-amount');
    const totalPrice= getValue('total-price');
    const sum = cardthreeAmount + totalPrice;
    const sumNumber = sum.toFixed(2);
    setValue('total-price', sumNumber);
 

 })

 document.getElementById('card-four').addEventListener('click', function(){
    const cardthreeAmount = getValue('card-four-amount');
    const totalPrice= getValue('total-price');
    const sum = cardthreeAmount + totalPrice;
    const sumNumber = sum.toFixed(2);
    setValue('total-price', sumNumber);
 

 })

 document.getElementById('card-five').addEventListener('click', function(){
    const cardthreeAmount = getValue('card-five-amount');
    const totalPrice= getValue('total-price');
    const sum = cardthreeAmount + totalPrice;
    const sumNumber = sum.toFixed(2);
    setValue('total-price', sumNumber);
 

 })

 document.getElementById('card-six').addEventListener('click', function(){
    const cardthreeAmount = getValue('card-six-amount');
    const totalPrice= getValue('total-price');
    const sum = cardthreeAmount + totalPrice;
    const sumNumber = sum.toFixed(2);
    setValue('total-price', sumNumber);
 

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