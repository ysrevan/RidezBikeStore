import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  wishlist: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWishlist:(state,action)=>{
       let existProduct = state.wishlist.find((item)=>item._id == action.payload._id)

       if (existProduct) {
        state.wishlist = state.wishlist.filter((item)=>item._id !== action.payload._id)
        toast.error("Product deleted from wishlist")
      }else{
        state.wishlist.push(action.payload)
        toast.success("Product added to wishlist")
      }
    },

    clearWishlist: (state) => {
        state.wishlist = []
        toast.error("Products deleted from wishlist")
      }
  },
})


export const { addWishlist,clearWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer