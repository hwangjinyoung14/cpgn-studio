import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import db from '../db.json';

const LookBook = () => {
  const [query] = useSearchParams(); // 쿼리 매개변수를 가져오는 훅 사용
  const [lookBookList, setLookBookList] = useState([]); // 룩북 항목 리스트 상태 설정
  const [selectedFilter, setSelectedFilter] = useState("filteredOther"); // 선택한 필터 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [itemsPerPage] = useState(4); // 페이지 당 아이템 수
  const [totalPages, setTotalPages] = useState(0); // 총 페이지 수

  // 컴포넌트가 마운트되거나 쿼리 또는 필터가 변경될 때마다 실행
  useEffect(() => {
    getLookBookProducts();
  // 쿼리, 선택된 필터, 현재 페이지가 변경될 때마다 실행되는 효과
  }, [query, selectedFilter, currentPage]); 
  // 룩북 상품 데이터를 가져오는 함수
  const getLookBookProducts = async () => {
    // 쿼리 매개변수에서 검색 쿼리 가져오기
    let searchQuery = query.get('q') || "";
    // 필터링된 룩북 항목을 저장할 변수 초기화
    let filteredOther = [];

    // 각 연도별 컬렉션 데이터 가져오기
    const collection2023 = db["2023collection"];
    const collection2022 = db["2022collection"];
    const collection2021 = db["2021collection"];

    // 검색 쿼리에 따라 해당 연도의 컬렉션 선택
    switch (searchQuery) {
      case "2023":
        filteredOther = collection2023;
        break;
      case "2022":
        filteredOther = collection2022;
        break;
      case "2021":
        filteredOther = collection2021;
        break;
      default:
        // 검색 쿼리가 없을 경우 모든 컬렉션 합치기
        filteredOther = [...collection2023, ...collection2022, ...collection2021];
    }
    
    if (selectedFilter === "2023") {
      filteredOther = collection2023;
    } else if (selectedFilter === "2022") {
      filteredOther = collection2022;
    } else if (selectedFilter === "2021") {
      filteredOther = collection2021;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredOther.slice(indexOfFirstItem, indexOfLastItem);

    setLookBookList(currentItems);

    const totalPages = Math.ceil(filteredOther.length / itemsPerPage);
    setTotalPages(totalPages);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1); // 필터 변경시 첫 페이지로 돌아가도록 설정
  };

  return (
    <div className='LookBook'>
      <div className="inner lookBook-inner">
        {/* 버튼을 통해 필터링된 컬렉션을 선택 */}
        <div className='filterBtnBox'>
          <h3 onClick={() => handleFilterChange("filteredOther")}
          className={selectedFilter === "filteredOther" ? 'clickFilterBtn' : ''} >LOOKBOOK</h3>
          <div className="yearFilterBtn">
          <h3 onClick={() => handleFilterChange("2023")}
          className={selectedFilter === "2023" ? 'clickFilterBtn' : ''}>2023 COLLECTION</h3>
          <h3 onClick={() => handleFilterChange("2022")}
          className={selectedFilter === "2022" ? 'clickFilterBtn' : ''}>2022 COLLECTION</h3>
          <h3 onClick={() => handleFilterChange("2021")}
          className={selectedFilter === "2021" ? 'clickFilterBtn' : ''}>2021 COLLECTION</h3>
          </div>
        </div>

        {/* 필터링된 룩북 이미지 리스트 표시 */}
        <div className="image-list">
          {lookBookList.map(item => (
            <img key={item.id} src={item.img} alt={`Collection ${item.id}`} />
          ))}
        </div>

        {/* 페이지네이션 */}
        <ul className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <button onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'clickPagenationBtn' : ''}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LookBook;