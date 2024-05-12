import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../db.json';

const OuterDetail = () => {
  let{id} = useParams();
  let [outer, setOuter]=useState(null);

  useEffect(() => {
    const selectedOuter = db.outer.find((item) => item.id === parseInt(id));
    setOuter(selectedOuter);
  }, [id]); // id가 변경될 때마다 useEffect가 실행

  // 상품 정보가 없을 경우 로딩 메시지를 출력
  if (!outer) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className='OuterDetail'>
      <div className="inner">
        <div className="detail">
          <div className="detail_left">
            <img alt="outerImg" src={outer?.img}/>
          </div>
          <div className="detail_right">
            <h2>{outer?.title}</h2>
            <h4>KRW {outer?.price}</h4>
            <h4><span>기간한정가격</span>{outer?.sale}</h4>
            <h4><span>배송비</span>무료</h4>
            <div className="size-box">
              <h4>사이즈</h4>
              <select>
                <option value="Mandatory selection">- [필수]옵션을 선택해 주세요 -</option>
                <option value="bar"> ------------------------------------------</option>
                {outer?.size.map((size, index)=>(
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

export default OuterDetail