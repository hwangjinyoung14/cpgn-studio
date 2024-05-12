import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch, CiHeart, CiShoppingCart, CiFaceSmile } from "react-icons/ci";

const OtherCard = ({item, setSelectedItem}) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(0);

  const goToPage = ()=>{
    navigate(`/other/${item.id}`);
  }

  const handleLikeClick = (e) => {
    //좋아요를 클릭해도 OuterCard 전체가 묶여있기 때문에 goToPage까지 작동된다.
    //stopPropagation()는 이벤트가 상위 엘리먼트에 전달되지 않게 막아 준다.
    //e.preventDefault는 고유 동작을 중단시키고, e.stopPropagation는 상위 엘리먼트들로의 이벤트 전파를 중단시킨다.
    e.stopPropagation();
    setLike(like + 1);
  };

  const handleCartClick = (e) => {
    e.stopPropagation(); 
    setSelectedItem(item);
  };

  return (
    <div className='OtherCard' onClick={goToPage}>
      <div className="img-box">
        <img src={item?.img} alt="thumNail"/>
        <div className="img-desc">
        <CiFaceSmile 
            size="18" 
            color='#ff0a0a' 
            onClick={handleLikeClick}  
            style={{
              cursor: 'pointer'
            }}
          />
        <h2 style={{fontSize:12, color:'#ff0a0a'}}>{like}</h2>
        <CiHeart size="18" color='#515151'/>
        <CiSearch size="18" color='#515151'/>
        <CiShoppingCart size="18" color='#515151' onClick={handleCartClick}/>
        </div>
      </div>
      <h2 className='title'>{item?.title}</h2>
      <p className='price'>KRW {item?.price}</p>
      <p className='sale'>KRW {item?.sale}</p>
    </div>
  )
}

export default OtherCard