import  dataOne from '../dataOne.js';
import Destination from "./Destination";

const Destinations = () => {
return( <div>
    {dataOne.map(destination => <Destination destination={destination} />)}
    </div>)
}

export default Destinations;