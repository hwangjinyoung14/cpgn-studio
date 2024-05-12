import React from 'react';
import { MdClose } from "react-icons/md";
import Swal from "sweetalert2";

//alert custom
const OuterModalCart = ({ selectedItem, setSelectedItem, cart, setCart }) => {
  const closeModal = () => {
    setSelectedItem(null); // 모달 닫기 시 상품 정보 초기화
  };

const alertCustom = () => Swal.fire({
  icon: "error",
  text: "옵션을 선택해 주세요",
  showConfirmButton: false,
  timer: 1500
});

const alertCustom2 = () => Swal.fire({
  position: "center",
  icon: "success",
  text: `${selectedItem.title}가 장바구니에 담겼습니다.`,
  showConfirmButton: false,
  timer: 1500
});
  
const alertOption = (e) => {
  const selectValue = document.getElementById('cart-select');
  e.stopPropagation(); // 이중클릭막기
  if(selectValue.value == "mandatory-selection" || selectValue.value == "var"){
    alertCustom();
  }else{
    alertCustom2();
    setCart(cart + 1);
  }
};

  return (
    <div className="OuterModalCartWrap">
      {selectedItem && ( // 선택된 상품이 있을 때만 모달 표시
        <div className='OuterModalCart'>
          <div className="outer-cart-top">
            <h4>옵션선택</h4>
            <MdClose className='modal-close-btn' onClick={closeModal} />
          </div>
          <div className="outer-cart-contents">
            <div className="cart-contents-title">
            <h2>{selectedItem.title}</h2>
            <div className="price-box">
              <h4>KRW {selectedItem.price}</h4>
              <h4>KRW {selectedItem.sale}</h4>
            </div>
            </div>
            <div className="outer-cart-option">
              <img alt="outerImg" src={selectedItem.img} />
              <div className="size-box">
                <h4>사이즈</h4>
                <select id='cart-select'>
                  <option value="mandatory-selection">- [필수]옵션을 선택해 주세요 -</option>
                  <option value="var"> ------------------------------------------</option>
                  {selectedItem.size.map((size, index) => (
                    <option key={index}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
            <span></span>
            <div className="buy-box">
              <button type='submit'>바로 구매하기</button>
              <button type='submit' onClick={alertOption}>장바구니 담기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OuterModalCart;