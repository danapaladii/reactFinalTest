
const Destination = ({destination}) => {
    return(<div>
        <img src = {`${destination.img}.jpg`} />
        <h3>{destination.name}</h3>
        <h4>{destination.price}</h4>
        <h4>{destination.duration}</h4>
    </div>)
}

export default Destination;
