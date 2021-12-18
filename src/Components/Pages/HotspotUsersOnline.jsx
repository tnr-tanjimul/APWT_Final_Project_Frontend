import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import axios from "axios";


const HotspotUsersOnline = (props) => {
    const [apiData, setApidata] = useState([]);

    useEffect(() => {
        axios.get("hotspot/online")
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
                                                        
                                                        <th className="pointer" title="Click to sort">Server</th>
                                                        <th className="pointer" title="Click to sort">IP Address</th>
                                                        <th className="pointer" title="Click to sort">Mac Address</th>
                                                       
                                                       
                                                        <th className="pointer" title="Click to sort">Up time</th>
                                                        <th className="pointer" title="Click to sort">IN</th>
                                                        <th className="pointer" title="Click to sort">Out</th>
                                                        <th className="pointer" title="Click to sort">Login By</th>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    {
                                                        apiData.map(p => (
                                                            <tr key={p.id}>
                                                                <td>
                                                                    <Link className="fa fa-minus-square text-danger pointer" to={"/hotspot/online/remove/"+p.serverId+"/"+p.user} title="Remove 01790381402"></Link>                                                                    
                                                                   
                                                                </td>
                                                                <td>{p.id}</td>
                                                                <td>{p.user}</td>
                                    
                                                                <td>{p.serverName}</td>
                                                                <td>{p.address}</td>
                                                                <td>{p.macAddress}</td>
                                                                <td>{p.uptime}</td>
                                                                <td>{p.bytesIn}</td>
                                                                <td>{p.bytesOut}</td>
                                                                <td>{p.loginBy}</td>
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

export default HotspotUsersOnline;