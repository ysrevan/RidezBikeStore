import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:5000/api/wishlist';

export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist', async (_, thunkAPI) => {
  try {
    const res = await axios.get(API_URL, { withCredentials: true });
    return res.data.products;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Error fetching wishlist");
  }
});

export const addWishlist = createAsyncThunk('wishlist/addWishlist', async (product, thunkAPI) => {
  try {
    const res = await axios.post(API_URL, { productId: product._id }, { withCredentials: true });
    toast.success("Product added to wishlist");
    return res.data.products;
  } catch (err) {
    toast.error("Please login to add wishlist");
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Add wishlist error");
  }
});

export const removeWishlist = createAsyncThunk('wishlist/removeWishlist', async (product, thunkAPI) => {
  try {
    const res = await axios.delete(`${API_URL}/${product._id}`, { withCredentials: true });
    toast.error("Product removed from wishlist");
    return res.data.products;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Remove wishlist error");
  }
});

export const clearWishlist = createAsyncThunk('wishlist/clearWishlist', async (_, thunkAPI) => {
  try {
    await axios.delete(API_URL, { withCredentials: true });
    toast.error("Wishlist cleared");
    return [];
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data?.message || "Clear wishlist error");
  }
});

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlist: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
      })
      .addCase(removeWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
      })
      .addCase(clearWishlist.fulfilled, (state) => {
        state.wishlist = [];
      });
  },
});

export default wishlistSlice.reducer;
