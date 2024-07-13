import React, { useState } from 'react'
import Image from '../utils/Image'
import Button from '../utils/Button'
import { txtSlicer } from '../utils/Functions'
import Modal from '../utils/Modal'


const ProductCard = ({e , setProducts}) => {
  const [open , setOpen] = useState(false)
  
  return (
    <div className='product-card'>
      <Image Img={`assets/${e.imageURL}.jpg`}  />
      <h3> {e.title} </h3>
      <p> { txtSlicer(e.description , 70)} </p>
      <ul> { e.colors?.map((e , idx) => <li key={idx} style={{backgroundColor:e}}></li> ) } </ul>
      <div className="price"> 
          <span> $ {e.price} </span>
          <div className="cate">
            <h4> {e.category?.name} </h4>
            <Image Img={`assets/${e.imageURL}.jpg`}  />
          </div>
        </div>

        <div className="btns">
          <Button onClick={_=> setOpen(!open)} > Edit </Button>
          <Button onClick={_=> setProducts(prev => prev.filter(ele => ele.id !== e.id)) } > Delete </Button>
        </div>

        <Modal setProducts={setProducts} ele={e} open={open} setOpen={setOpen} />
    </div>
  )
}

export default ProductCard