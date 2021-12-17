import { Link } from "react-router-dom";
function AuthLogo() {
    return (
        <div className="auth-brand text-center text-lg-left">
            <div className="auth-logo">
                <Link to="index.php" className="logo logo-dark text-center">
                    <span className="logo-lg">
                        <img src="/assets/images/logo-dark.png" alt="" height="22" />
                    </span>
                </Link>

                <Link to="index.php" className="logo logo-light text-center">
                    <span className="logo-lg">
                        <img src="/assets/images/logo-light.png" alt="" height="22" />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default AuthLogo;