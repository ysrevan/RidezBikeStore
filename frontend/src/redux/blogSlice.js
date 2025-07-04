import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
let baseUrl = "http://localhost:5000/api/blogs"

const initialState = {
    blogs: [],
}

export const getBlogs = createAsyncThunk("get/blogs",async()=>{
    let {data} = await axios(baseUrl)
    return data
})

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
     state.blogs = action.payload
    })
}


})


export const {  } = blogSlice.actions

export default blogSlice.reducer