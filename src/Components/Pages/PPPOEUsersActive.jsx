import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";




import React, { useState, useEffect } from "react";
import axios from "axios";


const PPPOEUsersActive = (props) => {
    const [apiData, setApidata] = useState([]);

    useEffect(() => {
        axios.get("hotspot/users")
            .then(resp => {
                console.log(resp.data);
                setApidata(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <>
            <div id="wrapper">
                <TopBar></TopBar>
                <LeftSideBar></LeftSideBar>
                <div className="content-page">
                    <div className="content">


                        <div className="container-fluid">

                            {/* start page title */}

                            <BreadcrumbNav page="Active Users" title="Hotspot"></BreadcrumbNav>

                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <span className="float-left"><i className="fas fa-sync-alt pointer" title="Reload data"></i></span>
                                        </div>
                                        <div className="card-body">
                                            <table id="datatable-buttons" className="table table-striped dt-responsive nowrap w-100">

                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th className="pointer" title="Click to sort">C.ID</th>
                                                        <th className="pointer" title="Click to sort">Name</th>
                                                        <th className="pointer" title="Click to sort">Password</th>
                                                        <th className="pointer" title="Click to sort">Server</th>
                                                        <th className="pointer" title="Click to sort">Profile</th>
                                                        <th className="pointer" title="Click to sort">Mac Address</th>
                                                        <th className="pointer" title="Click to sort">Up time</th>
                                                        <th className="pointer" title="Click to sort">IN</th>
                                                        <th className="pointer" title="Click to sort">Out</th>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    {
                                                        apiData.map(p => (
                                                            <tr key={p.id}>
                                                                <td>
                                                                    <Link className="fa fa-minus-square text-danger pointer" to={"/hotspot/users/remove/"+p.id} title="Remove 01790381402"></Link>                                                                    
                                                                    <Link className="fa fa-unlock pointer" to={"/hotspot/users/remove/"+p.id}></Link>
                                                                </td>
                                                                <td>{p.id}</td>
                                                                <td>{p.name}</td>
                                                                <td>{p.password}</td>
                                                                <td>{p.serverName}</td>
                                                                <td>{p.profile}</td>
                                                                <td>{p.macAddress}</td>
                                                                <td>{p.uptime}</td>
                                                                <td>{p.bytesIn}</td>
                                                                <td>{p.bytesOut}</td>
                                                            </tr>
                                                        ))
                                                    }




                                                </tbody>
                                            </table>


                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <Footer></Footer>



                </div>

            </div>
            <RightSidebar></RightSidebar>
            <div className="rightbar-overlay"></div>
        </>

    );
}

export default PPPOEUsersActive;