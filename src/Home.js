import hiking from './hiking.jpg';
import "./App.css";

function Home() {
    return (
        <div className="App">
        
        <h1>On Top of the World</h1>
        <h2>Hiking Tours</h2>
        
        <img className="image" src={hiking} width="1520px" height="1000px" alt="hiking" />
    </div>
    )
}

export default Home;