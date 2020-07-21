import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    selectedProduct: {},
    allProducts: [],
    cart: [],
    items: 0,
    cost: 0,
    deliveryFee: 50,
    totalCost: 0
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function update_all_products(products) {
        dispatch({
            type: 'UPDATE_ALL_PRODUCTS',
            payload: products
        })
    }

    function push_to_cart(product) {
        dispatch({
            type: 'PUSH_TO_CART',
            payload: product
        })
    }

    function inc_qty(data) {
        dispatch({
            type: "INC_QTY",
            payload: data
        })
    }


    return (
        <GlobalContext.Provider value={{
            allProducts: state.allProducts,
            selectedProduct: state.selectedProduct,
            cart: state.cart,
            items: state.items,
            cost: state.cost,
            deliveryFee: state.deliveryFee,
            totalCost: state.totalCost,
            update_all_products,
            push_to_cart,
            inc_qty,
        }}>
            {children}
        </GlobalContext.Provider>
    )

}