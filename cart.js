const cartItemsEl = document.querySelector(".cart-items")
const subTotalEl = document.querySelector(".subtotal")

let cart = JSON.parse(localStorage.getItem('CART')) || [];

function updateCart(){
    renderCartItems();
    renderSubTotal();
}

updateCart();

// Render cart items
function renderCartItems(){
    cartItemsEl.innerHTML = ""; // Clear cart element
    cart.forEach((item) => {
        cartItemsEl.innerHTML+= `
            <div class="cart-item">
                <div class="item-info">
                    <img src="${item.imageSrc}" alt="${item.productName}">
                    <h4>${item.productName}</h4>
                </div>
                <div class="unit-price">
                    <small>$</small>${item.price}
                </div>
                <div class="units">
                    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${JSON.stringify(item)})">-</div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${JSON.stringify(item)})">+</div>           
                </div>
            </div>
        `
    })
}

function changeNumberOfUnits(action, item){
    cart = cart.map((cartItem) => {
        console.log(cartItem.id,item.id);
        // if(cartItem.id === item.id){
            
        //     let numberOfUnits = cartItem.numberOfUnits;
        //     if(action === "minus" && numberOfUnits > 1){
        //         numberOfUnits--;
        //     } else if(action === "plus"){
        //         numberOfUnits++;
        //     }
        //     return {
        //         ...cartItem,
        //         numberOfUnits,
        //     };
        // } 
        // else {
        //     return cartItem;
        // }
    });
    
    updateCart();
    localStorage.setItem('CART', JSON.stringify(cart));
}

// Calculate and render subtotal
function renderSubTotal(){
    let totalPrice = 0, totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits
    })

    subTotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice}`
}
