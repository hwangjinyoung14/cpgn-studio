import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch, CiHeart, CiShoppingCart, CiFaceSmile } from "react-icons/ci";

const OuterCard = ({ item, setSelectedItem }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(0); // like 상태와 setLike 함수 초기화

  const goToPage = () => {
    navigate(`/outer/${item.id}`);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation(); // 이중클릭막기
    setLike(like + 1);
  };

  const handleCartClick = (e) => {
    e.stopPropagation(); // 이중클릭막기
    setSelectedItem(item); // 클릭된 상품 정보를 전달
  };

  return (
    <div className='OuterCard'>
      <div className="img-box" onClick={goToPage}>
        <img src={item?.img} alt="thumNail" />
        <div className="img-desc">
          <div className="like-count">
            <CiFaceSmile
              size="18"
              color='#ff0a0a'
              onClick={handleLikeClick}
              style={{
                cursor: 'pointer'
              }}
            />
            <h2 style={{ fontSize: 12, color: '#ff0a0a' }}>{like}</h2>
          </div>
          <CiHeart size="18" color='#515151' />
          <CiSearch size="18" color='#515151' />
          <CiShoppingCart
            size="18"
            color='#515151'
            onClick={handleCartClick}
          />
        </div>
      </div>
      <h2 className='title'>{item?.title}</h2>
      <p className='price'>KRW {item?.price}</p>
      <p className='sale'>KRW {item?.sale}</p>
    </div>
  );
};

export default OuterCard;