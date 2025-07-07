let cart = [];
let cartTotal = 0;

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    updateCart();
    showAddedToCartMessage(name);
}

function removeFromCart(id) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
    }
    updateCart();
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotalElement = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = '';
    cartTotal = 0;
    let totalItems = 0;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Je winkelmandje is leeg</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            cartTotal += itemTotal;
            totalItems += item.quantity;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>€${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="background: #dc3545; margin-left: 0.5rem;">🗑️</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
    
    cartCount.textContent = totalItems;
    cartTotalElement.textContent = cartTotal.toFixed(2).replace('.', ',');
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
}

function showAddedToCartMessage(itemName) {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem;
        border-radius: 5px;
        z-index: 1002;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        transition: all 0.3s;
    `;
    message.textContent = `${itemName} toegevoegd aan winkelmandje!`;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Je winkelmandje is leeg!');
                return;
            }
            
            alert(`Bedankt voor je bestelling!\nTotaal: €${cartTotal.toFixed(2).replace('.', ',')}\n\nJe wordt doorgestuurd naar de betaalpagina.`);
            cart = [];
            updateCart();
            toggleCart();
        });
    }
    
    updateCart();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    }
});