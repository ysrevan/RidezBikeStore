import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const initialState = {
  basket:[],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket:(state,action)=>{
       let findProduct = state.basket.find((item)=>item._id == action.payload._id)

       if (!findProduct) {
        state.basket.push({...action.payload,count:1})
        toast.success("Product added to basket")
       }else{
        findProduct.count+=1
        toast.success("Product added to basket")
       }
    },

    removeBasket:(state,action)=>{
        state.basket = state.basket.filter((item)=>item._id != action.payload._id)
        toast.error("Product deleted from basket")
    },

    increment:(state,action)=>{
        let findProduct = state.basket.find((item)=>item._id == action.payload._id)

        if (findProduct) {
            findProduct.count++
            toast.success("Product added to basket")
        }
    },

    decrement:(state,action)=>{
        let findProduct = state.basket.find((item)=>item._id == action.payload._id)

        if (findProduct && findProduct.count > 1) {
            findProduct.count--
            toast.error("Product deleted from basket")
        }
    },

    clearBasket:(state)=>{
      state.basket=[]
      toast.error("Products deleted from basket")
    }
  },
})


export const { addBasket,removeBasket,increment,decrement,clearBasket } = basketSlice.actions

export default basketSlice.reducer