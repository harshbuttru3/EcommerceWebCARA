const urlParams = new URLSearchParams(window.location.search);
    const imagePath = urlParams.get('imagePath');
    const price = urlParams.get('price')
    const id = urlParams.get('id')
    // console.log(id)
    

    const proDetails = document.getElementById("prodetails")

    proDetails.innerHTML = `<div class="single-pro-image">
            <img src="${imagePath}" width="100%" id="MainImg">
            <div class="small-img-group SmallImgp-1">
                <div class="small-img-col">
                    <img src="${imagePath}" width="100%" class="small-img" onclick="changeProduct()" alt="">
                </div>
                <div class="small-img-col">
                    <img src="img/products/f2.jpg" width="100%" class="small-img" onclick="changeProduct()" alt="">
                </div>
                <div class="small-img-col">
                    <img src="img/products/f3.jpg" width="100%" class="small-img" onclick="changeProduct()" alt="">
                </div>
                <div class="small-img-col">
                    <img src="img/products/f4.jpg" width="100%" class="small-img" onclick="changeProduct()" alt="">
                </div>
            </div>
        </div>
        <div class="single-pro-details">
            <h6>Home / T-Shirts</h6>
            <h4>Men's Fashion T Shirt</h4>
            <h2 class="pricetag">$${price}</h2>
            
            <button class="normal cart-btn" onclick="addToCart('${id}')">Add To Cart</button>
            <h4>Product Deatils</h4>
            <span>
                Ultra Cotton T-shirt from Lorem ipsum dolor sit amet consectetur adipisicing elit 100% cotton. Sint culpa porro labore magni et atque dolorem earum vero impedit! Aliquam, beatae eius unde sunt veritatis, facilis quam cupiditate obcaecati ratione voluptates consectetur eum! Ut, id dolorum odit quibusdam eos velit quia voluptatum repellat numquam corrupti consectetur reiciendis iusto magnam amet.
            </span>
        </div>`

    const MainImg = document.getElementById("MainImg")
    const smallimg = document.getElementsByClassName("small-img")


    for(let i=0; i<4; i++){
        smallimg[i].addEventListener('click', function() {
        MainImg.src = smallimg[i].src;
    })
    }

    
    // Check if CART object exists in local storage, if not, initialize it as an empty array.
    let cart = JSON.parse(localStorage.getItem('CART')) || [];

    function addToCart(id) {

        // Check if the product is already in the cart
        if(cart.some((item) => item.id === id)){
            changeNumberOfUnits("plus", id)
        }
        else{
            const item = products.find((item) => item.id === id);
            cart.push({
                ...item,
                numberOfUnits : 1
            })
            
            // updateCart();
            localStorage.setItem('CART', JSON.stringify(cart))
        }
    }

    
    function changeNumberOfUnits(action, id) {
        cart = cart.map((item) => {
          let numberOfUnits = item.numberOfUnits;
      
          if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
              numberOfUnits--;
            } else if (action === "plus") {
              numberOfUnits++;
            }
          }
      
          return {
            ...item,
            numberOfUnits,
          };
        });

        localStorage.setItem('CART', JSON.stringify(cart));

    }
        
        // Find the product by its ID (you can retrieve this information from your data source)
        // const product = {
        //     id: id,
        //     price: parseFloat(document.querySelector('.pricetag').textContent.replace('$', '')), // Convert price to a float
        //     quantity: parseInt(document.querySelector('input[type="number"]').value, 10) || 1, // Get the quantity or default to 1
        //     mainImg: document.querySelector('#MainImg').src // Get the source URL of the MainImg
        // };

        // // Check if the product is already in the cart
        // const existingProductIndex = cart.findIndex(item => item.id === product.id);

        // if (existingProductIndex !== -1) {
        //     // If the product already exists in the cart, update the quantity, size, and mainImg
        //     cart[existingProductIndex].quantity += product.quantity;
        //     cart[existingProductIndex].mainImg = product.mainImg;
        // } else {
        //     // If the product doesn't exist in the cart, add it
        //     cart.push(product);
        // }

        // // Update the local storage with the updated cart data
        // localStorage.setItem('CART', JSON.stringify(cart));
    



