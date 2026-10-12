import React from 'react'

export const HEADDER = ({headder,count}) => {
  return (
    <>
    <div className='headder'>
    <h1>LOGO</h1>
    <h3>HOME</h3>
    <h3>ABOUT</h3>
    <h3>SHOP</h3>
    <button className='hedderbtn'><i class="fa-solid fa-cart-plus"></i>cart /   {count}</button>
    </div>
    </>
  )
}

export default HEADDER