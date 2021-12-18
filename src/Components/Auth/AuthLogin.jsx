import AuthLogo from "../AuthLogo";
import AuthQuotes from "../AuthQuotes";
import AuthSocialButton from "../AuthSocialButton";
import { Link } from "react-router-dom";
import axios from "axios";
import React, {useState, userEffect} from "react";
import { useHistory } from "react-router-dom";
const AuthLogin = ()=>{
    let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");

    let history = useHistory();
    function handleRedirect() {
        history.push("/");
    }

    const loginSubmit= ()=>{
        var obj = {username: name, password: password};
        axios.post("login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.userid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            handleRedirect();
            
            // console.log(localStorage.getItem('user'));
        }).catch(err=>{
            console.log(err);
        });


    }
    return (

        <div className="auth-fluid">
            {/* Auth fluid left content */}
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex h-100">
                    <div className="card-body">

                        {/* Logo */}
                        <AuthLogo></AuthLogo>

                        {/** title*/}
                        <h4 className="mt-0">Sign In</h4>
                        <p className="text-muted mb-4">Enter your email address and password to access account.</p>

                        {/**{/* form */}
                        <div>

                         
                            <div className="form-group">





                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email address</label>
                                <input className="form-control" type="text" value={name} onChange={(e)=>setName(e.target.value)} name="Email" id="Email" required="" placeholder="Enter your email" />
                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Email" data-valmsg-replace="true"></span>
                            </div>
                            <div className="form-group">
                                <Link to="auth-recoverpw-2.php" className="text-muted float-right"><small>Forgot your password?</small></Link>
                                <label htmlFor="Password">Password</label>
                                <div className="input-group input-group-merge">
                                    <input type="password" name="Password" id="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter your password" />
                                    <div className="input-group-append" data-password="false">
                                        <div className="input-group-text">
                                            <span className="password-eye"></span>
                                        </div>
                                    </div>
                                    <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Password" data-valmsg-replace="true"></span>
                                </div>
                            </div>

                            <div className="form-group mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" name="remember" className="custom-control-input" id="checkbox-signin" />
                                    <label className="custom-control-label" htmlFor="checkbox-signin">Remember me</label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-center">
                                <button className="btn btn-primary btn-block" onClick={loginSubmit}>Log In </button>
                            </div>
                            {/** {/* social*/}
                            <AuthSocialButton></AuthSocialButton>
                        </div>
                        {/**{/* end form*/}
                        {/* Footer*/}
                        <footer className="footer footer-alt">
                            <p className="text-muted">Don't have an account? <Link to="/Auth/Registration" className="text-muted ml-1"><b>Sign Up</b></Link></p>
                        </footer>

                    </div> {/* end .card-body */}
                </div> {/* end .align-items-center.d-flex.h-100*/}
            </div>
            {/* end auth-fluid-form-box*/}
            <AuthQuotes></AuthQuotes>
        </div>

    )
}

export default AuthLogin;