// ** errors Object

export const productValidation = (product)=>{

  
  const errors = {
    title:"" , 
    description:"",
    price:""
  }

  if(!product.title?.trim() || product.title.length < 10 || product.title.length > 80 )
      errors.title = "Product title must be between 10 and 80 characters"

  if(!product.description?.trim() || product.description.length < 10 || product.description.length > 80 )
      errors.description = "Product description must be between 10 and 80 characters"

    if(  isNaN(Number(product.price)) )
      errors.price = "valid price is required!"
    
  return errors
}

