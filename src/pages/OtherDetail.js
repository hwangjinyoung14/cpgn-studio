import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../db.json';

const OtherDetail = () => {
  let{id} = useParams();
  let [other, setOther]=useState(null);

  useEffect(() => {
    const selectedOther = db.other.find((item) => item.id === parseInt(id));
    setOther(selectedOther);
  }, [id]); // id가 변경될 때마다 useEffect가 실행

  // 상품 정보가 없을 경우 로딩 메시지를 출력
  if (!other) {
    return <div>Loading...</div>;
  }
  return (
    <div className='OtherDetail'>
      <div className="inner">
        <div className="detail">
          <div className="detail_left">
            <img alt="otherImg" src={other?.img}/>
          </div>
          <div className="detail_right">
            <h2>{other?.title}</h2>
            <h4>KRW {other?.price}</h4>
            <h4><span>기간한정가격</span>{other?.sale}</h4>
            <h4><span>배송비</span>무료</h4>
            <div className="size-box">
              <h4>사이즈</h4>
              <select>
                <option value="Mandatory selection">- [필수]옵션을 선택해 주세요 -</option>
                <option value="bar"> ------------------------------------------</option>
                {other?.size.map((size, index)=>(
                  <option key={index}>{size}</option>
                ))}
              </select>
            </div>
            <span></span>
            <div className="buy-box">
              <button type='submit'>BUY NOW</button>
              <button type='submit'>ADD TO CART</button>
              <button type='submit'>WISH LIST</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherDetail