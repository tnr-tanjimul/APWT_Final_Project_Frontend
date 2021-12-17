import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <script>document.write(new Date().getFullYear())</script> &copy; SmartISP By <Link to="https://tnrsoft.com/">TNRSOFT</Link>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-right footer-links d-none d-sm-block">
                            <Link to="https://tnrsoft.com/#about">About Us</Link>
                            <Link to="https://www.facebook.com/tnrsoft">Help</Link>
                            <Link to="https://tnrsoft.com/#contact_us">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;