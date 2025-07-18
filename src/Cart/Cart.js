import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
return(<div>
    <img className="cartIcon" src="https://img.icons8.com/?size=100&id=QVQY51sDgy1I&format=png&color=000000" />
    <h3>TOTAL: ${totalPrice}</h3>
    {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem ={cartItem}/> )}
</div>)
}

export default Cart;
