import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ({data , setcategory}) => {
  const [value , setvalue] = useState({icon: data[0]?.icon , val:data[0]?.val})
  const arrowRef = useRef(null)


  useEffect(_=> {
    var acc = document.querySelector(".drop-value")
    var panel = document.querySelector(".drop-down ul")

    function minHeight(){
      panel.style.display === 'flex' ? panel.style.display = "none" : panel.style.display = "flex"

      // slide animation 
      if(panel.style.maxHeight) panel.style.maxHeight = null
      else panel.style.maxHeight = panel.scrollHeight + "px"
    }

    acc.addEventListener("click" , minHeight )
    return ()=> acc.removeEventListener("click" , minHeight )

  }, [])

  const handleDrop = (e)=>{
    setvalue({icon: e.icon , val : e.val})
    setcategory({icon: e.icon , val : e.val})
    document.querySelector(".drop-down ul").style= "min-height : 0 ; display:none ;"
  }

  return (
    <div className="drop-down">
      <div className='drop-value'> 
        <div className="title">
          <span> {value.icon} </span>   
          <span>{value.val} </span> 
        </div>
        <div ref={arrowRef} className="arrow"> {`<>`}  </div>
      </div>
      <ul>
        {
          data.map((e , idx) => <li onClick={_=> handleDrop(e)} key={idx}> <span> {e.icon} </span>   <span>{e.val} </span> </li> )
        }
      </ul>
    </div>
  )
}

export default Dropdown