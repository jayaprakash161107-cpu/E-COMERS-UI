// import React, { useState } from 'react'

// export const ProductCard = ({ product,setcount,count }) => {

// const[clicked ,setclicked]=useState(false)

// function add(){
// (setcount(count + 1))
//     setclicked(true)
// }
// function remove(){
//     (setcount(count - 1))
//     setclicked(false)
// }

//   return (
//     <>
//     <div className='productcard'>
//         <img className='product-img' src={product.image} alt={product.name}  />
//         <h3>{product.name}</h3>
//         <p>₹{product.price}</p>
//     </div>
//     {
//       clicked ?  <button className='btn-remove' onClick={add}>ADD TO CART</button> : <button className='btn' onClick={remove}>REMOVE FROM CART</button>
//     }
//     </>
//   )
// }
// export default ProductCard






import React, { useState } from 'react';

export const ProductCard = ({ product, setcount, count }) => {
  const [clicked, setclicked] = useState(false);

  function add() {
    setcount(count + 1);
    setclicked(true);
  }

  function remove() {
    setcount(count - 1);
    setclicked(false);
  }

  return (
    <div className="productcard">
      <img
        className="product-img"
        src={product.image}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {/* <button
        className={clicked ? "btn-remove" : "btn"}
        onClick={clicked ? remove : add}
      >
        {clicked ? "REMOVE FROM CART" : "ADD TO CART"}
      </button> */}


      {
        <button className={clicked ? "btn-remove":"btn"} onClick={clicked ? remove : add}>{clicked ? "REMOVE FROM CART":"ADD TO CART"}</button>
      }
    </div>
  );
};

export default ProductCard;