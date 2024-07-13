import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { productValidation } from '../validation'
import ErrorMessage from './ErrorMessage'

const Modal_create = ({open , setOpen , setProducts}) => {
  const [values , setvalues] = useState({title:"" , description:"" , price:"" , imageURL:"" })
  const [errors , setErrors] = useState()


  //!-------------- Category ---------------//
  const data = [
    {icon:"🚗" ,  val:"Toyota Camry"},
    {icon:"🚗" , val:"Honda Accord"},
    {icon:"🚗" , val:"BMW 3 Series"},
    {icon:"🚗" , val:"Mercedes-Benz E-Class"},
    {icon:"🚗" , val:"Ford Fusion"},
  ]
  const [category , setcategory] = useState("")

  //!-------------- Switcher Colors ---------------//
  const [showColors , setShowColors] = useState([])
  const colors = ["#8B4513","#2E8B57","#FF1493","#00CED1","#FF4500","#4682B4","#7CFC00","#BA55D3","#191970","#FFD700",]

  const handleColor = (e)=>{
    if (showColors.some(color => color == e))  return ;
    setShowColors([...showColors , e])
  }
  
  const handleRemoveColor = (e)=>{
    setShowColors(showColors.filter(color => color !== e))
  }

  //!-------------- Handlers ---------------//
  const handleValues = (e)=>{
    const {name , value} = e.target
    setvalues({...values , [name] : value })
    setErrors({...errors , [name] : "" })
  }

  
  const handleSubmit = (e)=>{
    e.preventDefault()
    const {title , description , price}  = values
    let errMessage = productValidation({title , description , price})

    if(! (Object.values(errMessage).some(e => e === "") && Object.values(errMessage).every(e => e === ""))) {
      setErrors(errMessage)
      return
    } ;

    setProducts(prev => [ {...values , category:{name:category.val}  , colors:showColors , id:prev.length + 1}, ...prev])
    setvalues({})
    setShowColors()
    setOpen(!open)
  }

  return (
  open && <div className='modal'>
    <div className='modal-wrapper'>
      <div className="title-header">  <span> Create Product</span> <span onClick={_=> setOpen(!open)}>x</span> </div>
      
      <form action="" onSubmit={handleSubmit}>
          <label htmlFor="title">product title</label>
          <input onChange={handleValues} value={values.title} type="text" id='title' name='title' />
          <ErrorMessage errors={errors?.title} />
          
          <label htmlFor="description">product description</label>
          <input onChange={handleValues} value={values.description} type="text" id='description' name='description' />
          <ErrorMessage errors={errors?.description} />

          <label htmlFor="imageURL">product image URL</label>
          <input onChange={handleValues} value={values.imageURL} type="text" id='imageURL' name='imageURL' />
          
          <label htmlFor="price">product price</label>
          <input onChange={handleValues} value={values.price} type="text" id='price' name='price' />
          <ErrorMessage errors={errors?.price} />

          <label htmlFor="category">category</label>
          <Dropdown data={data} category={category} setcategory={setcategory} />

          <div className="available-colors">
            {showColors?.map((e,i) => <span onClick={_=>handleRemoveColor(e)} style={{backgroundColor:e}} key={i}> {e} </span> )}
          </div>
          <ul className="colors">
            {colors.map((e , i) => <li onClick={_=>handleColor(e)} key={i} style={{ backgroundColor: e }}  />)}
          </ul>

          <button className='btn' type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Modal_create