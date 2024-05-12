import React, { useState } from 'react';
import { GoChevronRight } from "react-icons/go";

const Member = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='Member'>
      <div className="inner member-inner">
        <h2 className='member-title'>MY PAGE</h2>
        <p>저희 쇼핑몰을 이용해 주셔서 감사합니다. <span>[일반회원]</span></p>
        <div className="my-page">
          <div className='my-page-list'>
            {['ORDER 주문내역 조회', 'PROFILE 회원 정보', 'WISHLIST 관심 상품', 'LIKE IT 좋아요', 'MILEAGE 적립금', 'COUPON 쿠폰', 'BOARD 게시물 관리', 'ADRESS 배송 주소록 관리'].map((title, index) => (
              <div key={index} className='list-title'>
                <div className="list-title-wrap" onClick={() => toggleAccordion(index)}>
                  {title}
                  <GoChevronRight size="18" className={openIndex === index ? 'rotate' : ''}/>
                </div>
                <p className={`list-desc ${openIndex === index ? 'display-block' : ''}`}>
                  {index === 0 && '고객님께서 주문하신 상품의 주문내역을 확인하실 수 있습니다.'}
                  {index === 1 && '회원이신 고객님의 개인정보를 관리하는 공간입니다.'}
                  {index === 2 && '관심상품으로 등록하신 상품의 목록을 보여드립니다.'}
                  {index === 3 && "'좋아요'를 선택한 상품과 상품분류 목록을 보여드립니다."}
                  {index === 4 && '적립금은 상품 구매 시 사용하실 수 있습니다. 적립된 금액은 현금으로 환불되지 않습니다.'}
                  {index === 5 && '고객님이 보유하고 계신 쿠폰내역을 보여드립니다.'}
                  {index === 6 && '고객님께서 작성하신 게시물을 관리하는 공간입니다.'}
                  {index === 7 && '자주 사용하는 배송지를 등록하고 관리하실 수 있습니다.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;