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
                    <div class="btn minus" onclick="decreaseNumberOfUnits('${item.id}')">-</div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn plus" onclick="increaseNumberOfUnits('${item.id}')">+</div>
          
                </div>
            </div>
        `
    })
}
// Function to increase the number of units for an item in the cart
function increaseNumberOfUnits(itemId) {
    cart = cart.map((cartItem) => {
        if (cartItem.id === itemId) {
            return {
                ...cartItem,
                numberOfUnits: cartItem.numberOfUnits + 1,
            };
        } else {
            return cartItem;
        }
    });

    // Update the cart in localStorage after modifying it
    localStorage.setItem('CART', JSON.stringify(cart));
    updateCart();
}

// Function to decrease the number of units for an item in the cart
function decreaseNumberOfUnits(itemId) {
    cart = cart.map((cartItem) => {
        if (cartItem.id === itemId && cartItem.numberOfUnits > 1) {
            return {
                ...cartItem,
                numberOfUnits: cartItem.numberOfUnits - 1,
            };
        } else {
            return cartItem;
        }
    });

    // Update the cart in localStorage after modifying it
    localStorage.setItem('CART', JSON.stringify(cart));
    updateCart();
}


// function changeNumberOfUnits(action, item) {
//     console.log("Hello world");
//     console.log("item.id:", item.id);
//     cart = cart.map((cartItem) => {
//         console.log("cartItem.id:", cartItem.id);
//         if (cartItem.id === item.id) {
//             let numberOfUnits = cartItem.numberOfUnits;
//             if (action === "minus" && numberOfUnits > 1) {
//                 numberOfUnits--;
//             } else if (action === "plus") {
//                 numberOfUnits++;
//             }
//             return {
//                 ...cartItem,
//                 numberOfUnits,
//             };
//         } else {
//             return cartItem;
//         }
//     });

//     // Update the cart in localStorage after modifying it
//     localStorage.setItem('CART', JSON.stringify(cart));
//     updateCart();
// }

// Calculate and render subtotal
function renderSubTotal(){
    let totalPrice = 0, totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits
    })

    subTotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice}`
}