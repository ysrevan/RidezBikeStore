import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import shopproductSlice from './shopproductSlice'
import blogSlice from './blogSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import basketSlice from './basketSlice'
import wishlistSlice from './wishlistSlice'
import userSlice from './userSlice'
const persistBasketConfig = {
  key: 'basket',
  storage,
}

const persistWishlistConfig = {
  key: 'wishlist',
  storage,
}

const persistedBasketReducer = persistReducer(persistBasketConfig, basketSlice)
const persistedWishlistReducer = persistReducer(persistWishlistConfig, wishlistSlice)

export const store = configureStore({
  reducer: {homeproducts:productSlice,
    products:shopproductSlice,
    blogs:blogSlice,
    basket:persistedBasketReducer,
    wishlist:persistedWishlistReducer,
    user:userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

let persistor = persistStore(store)

export default persistor