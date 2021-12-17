import Footer from "../Footer";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Contact extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Contact us'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thanks for Contact Us'
        })
    }
    render() {
        return (
            <div className="content-page">
                <div className="content">


                    <div className="container-fluid">

                        {/* start page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        <form className="form-inline">
                                            <div className="form-group">
                                                <div className="input-group input-group-sm">
                                                    <input type="text" className="form-control border-0" id="dash-daterange" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text bg-blue border-blue text-white">
                                                            <i className="mdi mdi-calendar-range"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to="#" className="btn btn-blue btn-sm ml-2">
                                                <i className="mdi mdi-autorenew"></i>
                                            </Link>
                                            <Link to="#" className="btn btn-blue btn-sm ml-1">
                                                <i className="mdi mdi-filter-variant"></i>
                                            </Link>
                                        </form>
                                    </div>
                                    <h4 className="page-title"> {this.state.message} </h4>
                                </div>
                            </div>
                        </div>
                        {/* end page title */}

                        <div className="row">
                            <button onClick={() => this.changeMessage()}>Click</button>
                        </div>
                        {/* end row*/}
                    </div>
                </div>
                {/* content */}
                {/* Footer Start */}
                <Footer></Footer>
                {/* end Footer */}


            </div>
        );
    }
}

export default Contact;