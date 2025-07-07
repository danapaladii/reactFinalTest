import { useDispatch } from "react-redux";
import dataDestinations from "../dataDestinations";
import { removeItemFromCart } from "../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const destinations = dataDestinations.find(item => item.id === cartItem.destinationId);
    const dispatch = useDispatch();

    return(<div>
        <p>{destinations.name}</p>
        <p>{cartItem.quantity} person(s) trip</p>
        <p>Price: ${destinations.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="deleteIcon" src="https://img.icons8.com/?size=64&id=7irYTxFUskXo&format=png" />
        </span>
    </div>)
}

export default CartItem;