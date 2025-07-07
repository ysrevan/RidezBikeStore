import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/shopproductSlice'
import "./Admin.css"
function Admin() {
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  console.log(products);
  
  return (
    <section id='admin'>
      <div className="mycontainer">
         <div className="adminproductsbox">
 <table className="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Category</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
   {
    products && products.map((adminproduct)=>(
      <tr>
      <td><div className="adminimagebox"><img src={`http://localhost:5000/${adminproduct.image}`} alt="" /></div></td>
      <td>{adminproduct.title}</td>
      <td>{adminproduct.category}</td>
      <td>{adminproduct.description.slice(0,35)}...</td>
      <td>${adminproduct.price}</td>
    </tr>
    ))
   }
  </tbody>
</table>

         </div>
      </div>
    </section>
  )
}

export default Admin