import React, { useEffect, useState } from 'react';
import OuterCard from '../components/OuterCard';
import OuterModalCart from '../components/OuterModalCart';
import { useSearchParams } from 'react-router-dom';
import db from '../db.json';

const Outer = ({cart, setCart}) => {
  const [outerList, setOuterList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // 클릭된 상품 정보를 저장할 상태 추가
  const [query] = useSearchParams();

  const getOuterProducts = async () => {
    let searchQuery = query.get('q') || "";
    const outers = db.outer;
    // 검색 쿼리를 포함하는 제품들만 필터링합니다.
    const filteredOuter = outers.filter(outer => outer.title.toLowerCase().includes(searchQuery.toLowerCase()));

    // 필터링된 제품 리스트를 상태에 설정합니다.
    setOuterList(filteredOuter);
  }

  useEffect(() => {
    getOuterProducts();
  }, [query]);

  return (
    <div className='Outer'>
      <h2 className='outer-title'>OUTER</h2>
      <div className="outer-inner">
        {Array.isArray(outerList) && outerList.length > 0 ? (
          outerList.map((item) => (
            <OuterCard item={item} key={item.id} setSelectedItem={setSelectedItem} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      <OuterModalCart selectedItem={selectedItem} setSelectedItem={setSelectedItem} cart={cart} setCart={setCart} />
    </div>
  )
}

export default Outer