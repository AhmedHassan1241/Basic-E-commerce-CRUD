import React from 'react'
import { Link } from 'react-router-dom'

const Side = () => {
  return (
    <>
     <ul className='list-unstyled'>
        <li>
            <Link to='/products'>Get All Product</Link>
        </li>
        <li>
            <Link to='/categories'>Get All Categories</Link>
        </li>
     </ul> 
    </>
  )
}

export default Side
