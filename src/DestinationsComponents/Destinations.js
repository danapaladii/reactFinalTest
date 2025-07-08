import  dataDestinations from '../dataDestinations.js';
import Destination from "./Destination";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../redux/destinationsSlice";

const Destinations = () => {

    const selectedCategory = useSelector(getSelectedCategory);

return( <div>
    {dataDestinations
    .filter(destination => {
        if(selectedCategory === 'All') return true;
        return selectedCategory === destination.category;
    })
    .map(destination => <Destination key={destination} destination = {destination} />)}
    </div>)
}

export default Destinations;
