import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import shopproductSlice from './shopproductSlice'
import blogSlice from './blogSlice'
import basketSlice from './basketSlice'
import wishlistSlice from './wishlistSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    homeproducts: productSlice,
    products: shopproductSlice,
    blogs: blogSlice,
    basket: basketSlice,
    wishlist: wishlistSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})
