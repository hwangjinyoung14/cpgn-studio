import React, { useEffect, useState } from 'react';
import OtherCard from '../components/OtherCard';
import OtherModalCart from '../components/OtherModalCart';
import { useSearchParams } from 'react-router-dom';
import db from '../db.json';

const Other = ({cart, setCart}) => {
  const [otherList, setOtherList]=useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // 클릭된 상품 정보를 저장할 상태 추가
  const [query]=useSearchParams();

  const getOtherProducts = async()=>{
    let searchQuery = query.get('q')||"";
    const others = db.other;
    // 검색 쿼리를 포함하는 제품들만 필터링합니다.
    const filteredOther = others.filter(other => other.title.toLowerCase().includes(searchQuery.toLowerCase()));

    // 필터링된 제품 리스트를 상태에 설정합니다.
    setOtherList(filteredOther);
  }

  useEffect(()=>{
    getOtherProducts();
  },[query]);

  return (
    <div className='Other'>
       <h2 className='other-title'>OUTER</h2>
      <div className="other-inner">
      {Array.isArray(otherList) && otherList.length > 0 ? (
        otherList.map((item) => (
          <OtherCard item={item} key={item.id} setSelectedItem={setSelectedItem}/>
        ))
      ) : (
        <p>No products found</p>
      )}
      </div>
      <OtherModalCart selectedItem={selectedItem} setSelectedItem={setSelectedItem} cart={cart} setCart={setCart} />
    </div>
  )
}

export default Other