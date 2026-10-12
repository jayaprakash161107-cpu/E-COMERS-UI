import React, { useState } from 'react'
import "./App.css"
import HEADDER from './components/HEADDER'
import Banner from './components/Banner'
import { ProductCard } from './components/ProductCard'
import products from './data/productsData'
export const App = () => {

  const[count , setcount] =useState(0)

 
  

  return (
    <>
    <HEADDER count={count}/>
    <Banner/>

     <div className='product-list'>

     { products.map((product) => (
        <ProductCard key={product.id} product={product}  count={count} setcount={setcount}/>

      ))}

      </div>
    
    </>

  )
}
export default App