import "./App.css";
import MyForm from "./MyForm";
function Aboutus() {
    return (

    
    <div className="textone">

    <h2 className="textabout">Join us on an epic adventure! Witness the eternal beauty of nature and marvel at the magestic sights of our planet!</h2>
    
    
    <h4 className="textaboutone">All of our tours are all inclusive (excluding travel to pick up locations) and are lead by experienced and knowledgeable guides.</h4>
    
    <p>Please email us at <img className="contactIcon" src="https://img.icons8.com/?size=80&id=mtfWz20b5AxB&format=png" /> danapaladii22@gmail.com or call us at <img className="contactIcon"src="https://img.icons8.com/?size=64&id=Xs93aXrd5jvj&format=png" />407-873-4198 for more information and detailed itineraries.</p>
    <p>You can also request an information brochure to be sent to you by submitting your email below:</p>

    <MyForm />
    </div>
    
    )
}

export default Aboutus;