

const getCartFormLocalStorage = () => {
    const storeCartString = localStorage.getItem('cart');
    if (storeCartString) {
        const sotreCart = JSON.parse(storeCartString);
        return sotreCart;
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFormLocalStorage();
    const newCart = [...cart, id];
    saveCartToLocalStorage(newCart);
}

export {
    addItemToCartLocalStorage as addItem,
    getCartFormLocalStorage as getCart
}

// export default {
//     addItemToCartLocalStorage, 
//     getCartFormLocalStorage 
// };