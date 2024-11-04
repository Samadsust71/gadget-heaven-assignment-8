import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import ProductCard from "./ProductCard"


const Products = () => {
    const data = useLoaderData()
    const {category} = useParams()
    const [products,setProducts]=useState([])
    useEffect(()=>{
        if (category) {
            const categoriesWiseProduct = [...data].filter(product=>product.category===category)
            setProducts(categoriesWiseProduct)   
        } else {
            setProducts(data)
        }
         
    },[category,data])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
       products.map(product=><ProductCard key={product.product_id} product={product}/>)
      }
    </div>
  )
}

export default Products
