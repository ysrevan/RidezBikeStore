import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {toast} from "react-toastify"
let baseUrl = "http://localhost:5000/api/blogs"

const initialState = {
    blogs: [],
}

export const getBlogs = createAsyncThunk("get/blogs",async()=>{
    let {data} = await axios(baseUrl)
    return data
})

export const addBlog = createAsyncThunk("add/blog", async (formData) => {
    const { data } = await axios.post(baseUrl, formData);
    toast.success("Blog added")
    return data;
  });
  
  export const editBlog = createAsyncThunk("edit/blog", async ({ id, data: formData }) => {
    const { data } = await axios.put(`${baseUrl}/${id}`, formData);
    toast.success("Blog edited");
    return data;
  });
  
  export const deleteBlog = createAsyncThunk("delete/blog", async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    toast.error("Blog deleted")
    return id;
  });

export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
     state.blogs = action.payload
    })

    builder.addCase(addBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      });
      builder.addCase(editBlog.fulfilled, (state, action) => {
        const index = state.blogs.findIndex(b => b._id === action.payload._id);
        if (index !== -1) {
          state.blogs[index] = action.payload;
        }
      });
      builder.addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter(b => b._id !== action.payload);
      });
      
}


})


export const {  } = blogSlice.actions

export default blogSlice.reducer