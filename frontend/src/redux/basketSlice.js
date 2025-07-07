import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const API_URL = 'http://localhost:5000/api/basket'

export const fetchBasket = createAsyncThunk('basket/fetchBasket', async (_, thunkAPI) => {
  try {
    const res = await axios.get(API_URL, { withCredentials: true })
    return res.data.products
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message)
  }
})

export const addBasket = createAsyncThunk('basket/addBasket', async (product, thunkAPI) => {
  try {
    const res = await axios.post(API_URL, { productId: product._id }, { withCredentials: true })
    toast.success("Product added to basket")
    return res.data.products
  } catch (err) {
    toast.error("Please login to add basket")
    return thunkAPI.rejectWithValue(err.response.data.message)
  }
})

export const increment = createAsyncThunk('basket/increment', async (product, thunkAPI) => {
  try {
    const res = await axios.post(API_URL, { productId: product._id }, { withCredentials: true })
    return res.data.products
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message)
  }
})

export const decrement = createAsyncThunk('basket/decrement', async (product, thunkAPI) => {
  try {
    const res = await axios.post(`${API_URL}/decrement`, { productId: product._id }, { withCredentials: true })
    return res.data.products
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message)
  }
})

export const removeBasket = createAsyncThunk('basket/remove', async (product, thunkAPI) => {
  try {
    const res = await axios.delete(`${API_URL}/${product._id}`, { withCredentials: true })
    toast.error("Product deleted from basket")
    return res.data.products
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message)
  }
})

export const clearBasket = createAsyncThunk('basket/clear', async (_, thunkAPI) => {
  try {
    const res = await axios.delete(API_URL, { withCredentials: true })
    toast.error("Basket cleared")
    return []
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message)
  }
})

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBasket.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBasket.fulfilled, (state, action) => {
        state.loading = false
        state.basket = action.payload
      })
      .addCase(fetchBasket.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(addBasket.fulfilled, (state, action) => {
        state.basket = action.payload
      })
      .addCase(increment.fulfilled, (state, action) => {
        state.basket = action.payload
      })
      .addCase(decrement.fulfilled, (state, action) => {
        state.basket = action.payload
      })
      .addCase(removeBasket.fulfilled, (state, action) => {
        state.basket = action.payload
      })
      .addCase(clearBasket.fulfilled, (state, action) => {
        state.basket = []
      })
  },
})

export default basketSlice.reducer
