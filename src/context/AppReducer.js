function findProduct(id, array) {
    let isExist = false
    let arr_id = -1
    array.map((data, idx) => {
        if (data.id == id) {
            isExist = true
            arr_id = idx
            return true
        }
    })
    return [isExist, arr_id]
}

function AppReducer(state, action) {
    switch(action.type) {
        case 'UPDATE_ALL_PRODUCTS':
            return {
                ...state,
                allProducts: action.payload
            }
        
        case 'SELECT_PRODUCT':
            return {
                ...state,
                selectedProduct: action.payload
            }

        case 'PUSH_TO_CART':
            let product = action.payload
            let _cost = state.cost + product.price * product["qty"]
            let res = findProduct(product.id, state.cart)
            let _cart = state.cart
            if (!res[0]) {
                product["qty"] = 1
                _cart = [product, ...state.cart]
            }
            else {
                _cart[res[1]]["qty"] = ++_cart[res[1]]["qty"]
            }
            return {
                ...state,
                cart: _cart,
                // cart: [action.payload, ...state.cart],
                items: ++state.items,
                cost: _cost,
                totalCost: _cost + state.deliveryFee,
            }

        case 'INC_QTY':
            let data  = action.payload
            console.log(data)
            let _cart1 = state.cart
            let res1 = findProduct(data[0], state.cart)
            _cart1[res1[1]]["qty"] = data[1]
            return {
                ...state,
                cart: _cart1
            }

        default:
            return state
    }
}


export default AppReducer