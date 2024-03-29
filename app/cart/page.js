export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta'];

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <Btn color="blue" />
    </div>
  )
}

function Btn(props) {
  return(
    <div>
      <button style={{background: props.color}}>버튼</button>
    </div>
  )
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>상품명 { props.item }</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )    
}