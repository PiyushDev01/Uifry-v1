import React from 'react'
import "./Style.css"

function Button(props) {
  return (
    <div className=' w-fit p-fit  py-2 px-4 md:py-3 md:px-12 mx-4 rounded-md bg-black text-white cursor-pointer text-xs md:text-lg ' id='button' >{props.name}</div>
  )
}

export default Button