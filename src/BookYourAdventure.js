import Cart from './Cart/Cart';
import AllCategories from './Filter/AllCategories';
import Destinations from './DestinationsComponents/Destinations';

import "./App.css";

function BookYourAdventure() {

    return(
        <div>

        <div className="cont">
            <div>
            <AllCategories />
            <Cart/>
            </div> 
        
    
            <div>
            <Destinations />
            </div>
        </div>

        </div>
    )
}

export default BookYourAdventure;