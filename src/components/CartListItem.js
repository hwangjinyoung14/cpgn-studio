import React, { useState } from 'react';

const CartListItem = ({selectedItem}) => {
  return (
    <div className='CartListItem'>
      <div className="img-box">
        <img src={selectedItem?.img} alt="thumNail"/>
        <div className="img-desc">
        <h2 style={{fontSize:12, color:'#ff0a0a'}}></h2>
        </div>
      </div>
      <h2 className='title'>{selectedItem?.title}</h2>
      <p className='price'>KRW {selectedItem?.price}</p>
      <p className='sale'>KRW {selectedItem?.sale}</p>
    </div>
  )
}

export default CartListItem
