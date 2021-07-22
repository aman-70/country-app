import { Link } from "react-router-dom";

const Error404Page = () => {
    return (
        <main className="Error404Page">
            <div className="error404page-wrapper">
                <Link to="/">
                    <button className="back-btn-error">
                        <i className="fas fa-long-arrow-alt-left"></i>
                        Back
                    </button>
                </Link>
                <h1>404 Error</h1>
                <p>Oopsie! Requested page not found.</p>
            </div>
        </main>
    );
}

export default Error404Page;