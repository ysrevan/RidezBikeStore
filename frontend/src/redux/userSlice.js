import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { clearBasket, fetchBasket } from './basketSlice'
import { toast } from 'react-toastify'
import { clearWishlist, fetchWishlist } from './wishlistSlice'

const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    removeUser: (state) => {
      state.user = null
    }
  },
})

export const loginUser = (values) => async (dispatch) => {
  try {
    dispatch(clearBasket())  
   
    const res = await axios.post("/auth/login", values, { withCredentials: true })

    dispatch(setUser(res.data.existUser))  
    dispatch(fetchBasket())               
    dispatch(fetchWishlist())
    toast.success("Login successful")
  } catch (err) {
    toast.error(err.response?.data?.message || "Login error")
  }
}


export const logoutUser = () => async (dispatch) => {
  try {
    const res = await axios.post("/auth/logout", {}, { withCredentials: true })
    console.log("LOGOUT RESPONSE:", res.data)

    dispatch(removeUser())
    dispatch(clearBasket())
    dispatch(clearWishlist())

    toast.success("Logged out successfully")
  } catch (err) {
    console.error("Logout error:", err.response?.data)
    toast.error("Logout error")
  }
}




export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
