import React, { useState } from 'react'
import ProductCard from './components/ProductCard'
import { ProductList } from './data/ProductList'
import Modal_create from './utils/Modal_create'


const App = () => {
  const [open , setOpen] = useState(false)
  const [products , setProducts] = useState(ProductList)
  
  return (
    <div className='products-card'>
      <div className="createProduct">   <button onClick={_=> setOpen(!open)} className=" btn">Create product</button> </div>
      <Modal_create setProducts={setProducts} open={open} setOpen={setOpen} />
      <div className="container">
        {
          products.map((e , idx) => <ProductCard setProducts={setProducts} key={idx} e={e} />)
        }
      </div>
    </div>
  )
}

export default App