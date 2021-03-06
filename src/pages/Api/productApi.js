import {useState,useEffect} from 'react'

import axios from "axios"

function ProductsApi() {
    const [products,setProducts] = useState([])

    const getProducts = async() =>{
        const res = await axios.get("http://localhost:4000/checkProducts/products")
        setProducts(res.data.products)
        console.log("res.data.products in proAPI:",res.data.products)
  
    }  
    useEffect(() => { 
       getProducts()
       
      },[]);
  return {
      products:[products,setProducts]

      
 
}
}

export default ProductsApi; 

