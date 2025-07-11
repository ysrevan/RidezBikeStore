import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
let baseUrl = "http://localhost:5000/api/products"
import {toast} from "react-toastify"
const initialState = {
    products: [],
    allProducts: [],
}

export const getProducts = createAsyncThunk("get/products",async()=>{
    let {data} = await axios(baseUrl)
    return data
})

export const addProduct = createAsyncThunk("products/addproduct", async (formData) => {
  const { data } = await axios.post(baseUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  toast.success("Product added");
  return data;
});


export const deleteProduct = createAsyncThunk("products/deleteproduct", async (id) => {
  await axios.delete(`${baseUrl}/${id}`)
  toast.error("Product deleted")
  return id
})

export const editProduct = createAsyncThunk("products/editproduct", async ({ id, data }) => {
  const res = await axios.put(`${baseUrl}/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  toast.success("Product edited");
  return res.data;
});


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

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload)
  })

  builder.addCase(deleteProduct.fulfilled, (state, action) => {
    state.products = state.products.filter((item) => item._id !== action.payload)

  })

  builder.addCase(editProduct.fulfilled, (state, action) => {
    state.products = state.products.map((item) =>
      item._id === action.payload._id ? action.payload : item
    );
  });

    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
}


})


export const { sortProductHigest,sortProductLowest } = productSlice.actions

export default productSlice.reducer