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
            let _cost = Number(state.cost + product.price * product["qty"])
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
                totalCost: Number(_cost + state.deliveryFee).toFixed(2),
            }

        case 'REMOVE_FROM_CART':
            let res2 = findProduct(action.payload, state.cart)
            // console.log(res2)
            let _cart2 = state.cart
            let _product = _cart2[res2[1]]
            let pQty = _product["qty"]
            let pCost = _product["price"]
            let _newCost = Math.round((state.totalCost - (pQty * pCost)))
            let _newItemCost = Number(state.cost - (pQty * pCost))
            let _newCart = _cart2.filter(product => product.id != action.payload)
            if (_newCart.length == 0) {
                _newCost -= 50
            }
            return {
                ...state,
                cart: _newCart,
                totalCost: _newCost.toFixed(2),
                cost: Number(_newItemCost.toFixed(2)),
                items: Number(state.items - pQty),
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

        case 'CHECKOUT':
            return {
                ...state,
                cart: [],
                items: 0,
                cost: 0,
                deliveryFee: 50,
                totalCost: 0
            }

        default:
            return state
    }
}


export default AppReducer