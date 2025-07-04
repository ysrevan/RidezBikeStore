import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
let baseUrl = "http://localhost:5000/api/homeproducts"

const initialState = {
    homeproducts: [],
}

export const getHomeProducts = createAsyncThunk("get/homeproducts",async()=>{
    let {data} = await axios(baseUrl)
    return data
})

export const productSlice = createSlice({
  name: 'homeproducts',
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(getHomeProducts.fulfilled, (state, action) => {
     state.homeproducts = action.payload
    })
}


})


export const {  } = productSlice.actions

export default productSlice.reducer