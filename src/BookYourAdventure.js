import Cart from './Cart/Cart';
import AllCategories from './Filter/AllCategories';
import Destinations from './DestinationsComponents/Destinations';

import "./App.css";

function BookYourAdventure() {

   

    return(
        <div>
        <div className="container">
        <h1 className="text">Book Your Adventure</h1>
        </div> 
        
        <div className="container">
            <AllCategories />
        </div> 
        <div className="container">
            <Cart/>
        </div> 
    
        <div className="container place">
        <Destinations />
        </div>
        </div>
    )
}

export default BookYourAdventure;