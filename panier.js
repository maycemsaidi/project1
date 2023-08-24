document.addEventListener('DOMContentLoaded', function () {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const commanderBtn = document.getElementById('commander-btn');
    

    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

    let total = 0;
    let product.quantity=1
    selectedProducts.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = $('selectedProducts');
        cartList.appendChild(listItem);

        // Calcul du prix total pour chaque produit
        if(product.quantity>1 && product.price!=0){
        const productTotal = product.price * product.quantity;
        total += productTotal;}
    });

    cartTotal.textContent = total.toFixed(3) + ' TND'; // Affichez le total avec deux décimales

    commanderBtn.addEventListener('click', () => {
        alert('Commande passée !');
    });
});

