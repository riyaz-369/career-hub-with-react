import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops !!</h2>
            <Link to="/"><button className="btn btn-secondary">Home</button></Link>
        </div>
    );
};

export default ErrorPage;