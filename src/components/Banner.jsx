import React from 'react'
import bannerimg from "../assets/banner.png"


export const Banner = ({banner}) => {
  return (
    <>
    <img className='bannerimg' src={bannerimg} alt="" />
    </>
  )
}
export default Banner