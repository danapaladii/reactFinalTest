import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";

const Destination = ({destination}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(<div>
        <img className="picOne" src = {destination.img} width="300px" alt="travel" />
        <h3>{destination.name}</h3>
        <h4>${destination.price} (All inclusive, per person)</h4>
        <h4>{destination.duration}</h4>
        <ChangeQuantity quantity ={quantity} setQuantity={setQuantity} />
        <button onClick ={() => {dispatch(addItemToCart({destination, quantity}))}}>Choose This Adventure</button>
    </div>)
}

export default Destination;
