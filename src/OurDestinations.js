import { useState } from "react";
import { data } from './data';

import "./App.css";
function OurDestinations() {

    const [place, setPlace] = useState(0)
    const {id, Name, image} = data[place];

    const previousPlace = () => {
        setPlace ((place => {
            place --;
            if (place < 0) {
                return data.length-1;
            }
            return place;
        }))

    }

    const nextPlace = () => {
        setPlace ((place => {
            place ++;
            if (place > data.length-1) {
                place=0;
            }
            return place;
        }))
    }

    return (
    <div>
    <div className="container">
        <img src={image} width="700px" alt="place" />
    </div>

    <div className="container">
        <h1>{Name}</h1>
    </div>

    <div className="btn container">
        <button onClick={previousPlace}>Previous Destination</button>
        <button onClick={nextPlace}>Next Destination</button>
    </div>

    </div>
    )
}

export default OurDestinations;