import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
let baseUrl = "http://localhost:5000/api/products"

const initialState = {
    products: [],
    allProducts: [],
}

export const getProducts = createAsyncThunk("get/products",async()=>{
    let {data} = await axios(baseUrl)
    return data
})

export const searchProduct = createAsyncThunk(
    "product/searchProduct",
    async (search, { getState }) => {
      if (search === "") {
        return getState().products.allProducts;
      }
      const { data } = await axios.get(`${baseUrl}/search/${search}`);
      return data;
    }
  );

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortProductLowest: (state) => {
      state.products = state.products.sort((a, b) => a.price - b.price);
    },
    sortProductHigest: (state) => {
      state.products = state.products.sort((a, b) => b.price - a.price);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
     state.products = action.payload
     state.allProducts = action.payload
    })
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
}


})


export const {  } = productSlice.actions

export default productSlice.reducer