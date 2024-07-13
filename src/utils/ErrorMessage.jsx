import React from 'react'

const ErrorMessage = ({errors}) => {
  return (
     errors  ? <span className='error'> {errors} </span> : null
  )
}

export default ErrorMessage