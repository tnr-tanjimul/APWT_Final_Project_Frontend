import { Link } from "react-router-dom";
function AuthSocialButton() {
    return (
        <div className="text-center mt-4">
            <p className="text-muted font-16">Sign in with</p>
            <ul className="social-list list-inline mt-3">
                <li className="list-inline-item">
                    <Link to="#" className="social-list-item border-primary text-primary"><i className="mdi mdi-facebook"></i></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="#" className="social-list-item border-danger text-danger"><i className="mdi mdi-google"></i></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="#" className="social-list-item border-info text-info"><i className="mdi mdi-twitter"></i></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="#" className="social-list-item border-secondary text-secondary"><i className="mdi mdi-github"></i></Link>
                </li>
            </ul>
        </div>
    );


}

export default AuthSocialButton;