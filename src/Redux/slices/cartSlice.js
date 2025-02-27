import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartListSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            cart: []
        },
        reducers: {
            addToCart(state, action) {
                const existing = state.cart.find(item => item.id == action.payload.id)
                if (existing) {
                    existing.quantity += 1
                    state.cart = state.cart.filter(item => item.id != action.payload.id)
                    state.cart.push(existing)
                    toast.success("item quantity increased!!")
                }
                else {
                    const product = action.payload
                    product.quantity = 1
                    state.cart.push(product)
                    toast.warning("product added to cart!!")
                }
            },
            removeFromCart(state, action) {
                state.cart = state.cart.filter(item => item.id != action.payload)
                toast.success("product removed from cart")
            },
            increaseQuantity(state,action){
                const existing=state.cart.find(item=>item.id==action.payload)
                existing.quantity++
            },
            decreaseQuantity(state,action){
                const existing=state.cart.find(item=>item.id==action.payload)
                if(existing.quantity==1){
                    state.cart = state.cart.filter(item => item.id != action.payload)
                }
                else{
                    existing.quantity--
                }
            },
            checkout(state,action){
                state.cart=[]
                toast.success("Cart Checkedout")
            }
        }
    })

export default cartListSlice.reducer
export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity,checkout} = cartListSlice.actions