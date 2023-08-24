document.addEventListener('DOMContentLoaded', function () {
    localStorage.setItem("sPro","")

    const productCards = document.querySelectorAll('.product-card');
    const cartCountElement = document.querySelector('.cart-count');
    const cartIcon = document.querySelector('.fa-shopping-cart'); 
    

    let cartCount = 0;
    

    productCards.forEach(productCard => {
        const quantityValue = productCard.querySelector('.quantity-value');
        const decreaseBtn = productCard.querySelector('.decrease-btn');
        const increaseBtn = productCard.querySelector('.increase-btn');
        const addToCartBtn = productCard.querySelector('.btn-primary');

        let currentQuantity = 1;
           

        decreaseBtn.addEventListener('click', () => {
            if (currentQuantity > 1) {
                currentQuantity--;
                quantityValue.textContent = currentQuantity;
            }
        });

        increaseBtn.addEventListener('click', () => {
            currentQuantity++;
            quantityValue.textContent = currentQuantity;
        });


       addToCartBtn.addEventListener('click', () => {
            cartCount += currentQuantity;
            cartCountElement.textContent = cartCount;



        }); 

    }); 
   



});

 function addtoArr(name){
     let el=document.querySelector(`#${name} span `);
    
     if (!(localStorage.getItem("sPro")))
     {
         localStorage.setItem("sPro","")
     }
    
   let updated=  localStorage.getItem("sPro");
   for (let i=0; i<el.innerHTML; i++){

  
     updated +="/"+ name;}

    localStorage.setItem("sPro",updated);
    
 let dataArray = updated.split('/').filter(item => item !== "");
    console.log(dataArray); 
   }
  





function panier(){
   var el=localStorage.getItem('updated');
   el=el.split('/')
   var newarr=[]
   for (let i=0;i<el.length-2;i+=2)
 {
if (thabbet(el[i],newarr)==false){ 
let q=0; 
for (let j=i;j<el.length-2;j+=2){
if (el[j]==el[i]){
q++;
             }

        }
         let obj={
             "name" : el[i],
             "price": el[i+1],
             "quantity":q,
        };
        
        
         newarr.push(obj);

     }
    
    
 }
display(newarr)
 }




function thabbet(s,a=[]){

for (let i=0 ;i<a.length;i++){

 if (a[i].name==s)

 {
     return true; }
 }

return false;
 }


 function display(array){

 document.write("<html> <head> <meta charset='utf-8'> <link rel='stylesheet' href='style.css'></head><body><div class='pan'>")   
 for (el of array){    
var imgsrc = "./res/"+el.name+".jpg";
document.write(
`<div class="prd" class=${el.name}><img src=${imgsrc}> <p class="Prname">${el.name}</p> <p class="price">${el.price} DT</p><div class="counter"><div class="counterBtn" onclick="min(${el.name})">-</div> <p id="${el.name}" class="quantity">${el.quantity}</p> <div class="counterBtn" onclick="plus(${el.name})">+</div></div></div>`
 )
 }
  document.write("</div> <div class='tot'>Your total is <p id='yourTotal'><p></div<script src='script.js'></script></body></html>")
total()
}


 function plus(i){

     i.innerHTML++ 
     total() 
 }

 function min(i){
  
    i.innerHTML--
     total() }

 function total(){
     var p= document.getElementsByClassName("prd");
     let t=0;
     for (e of p){
        var price = e.getElementsByClassName("price")[0].innerHTML;
        price = parseInt(price.replace('DT',''))
   var quantity= e.getElementsByClassName('quantity')[0].innerHTML;
       quantity=parseInt(quantity)
         t+=price*quantity
    }

    document.getElementById("yourTotal").innerHTML=t +" DT"
    
 }





