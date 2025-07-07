
import Filter from "./Filter";

const AllCategories = () => {
    return(<div>
        <h2>Choose Your Favorite Season</h2>
        {['Spring', 'Summer', 'Fall', 'All'].map(category =><Filter category={category}/>)}
        </div>)
}
export default AllCategories;