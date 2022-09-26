import axios from 'axios'
const headerConfig={
    headers: {
        'x-access-token': localStorage.getItem('token')   
    }
}

export const getBooks = () => {
    
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',headerConfig)
   
    return response;
}

export const getCartItems = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items',headerConfig)
    return response;
}

export const addCartItems = (data) => {
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/'+data,data,headerConfig)
    return response;
}

export const putCartItem = (data,id) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,data,headerConfig)
    return response;
}

export const takeAddress = (data) => {
    let response = axios.put('https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user',data,headerConfig)
    return response;
}

export const checkoutItem = (data) => {
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order',data,headerConfig)
    return response;
}

export const getWishlist = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items',headerConfig)
    return response;
}

export const addWishlist = (data) => {
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/'+data,data,headerConfig)
    return response;
}

export const deleteWishlist = (data) => {
    let response = axios.delete('https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/'+data,headerConfig)
    return response;
}