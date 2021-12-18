import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";




import React, { useState, useEffect } from "react";
import axios from "axios";


const DHCPLease = (props) => {
    const [DHCPLease, setDHCPLease] = useState([]);

    useEffect(() => {
        axios.get("hotspot/dhcp-leases")
            .then(resp => {
                console.log(resp.data);
                setDHCPLease(resp.data);
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

                            <BreadcrumbNav page="DHCPLease" title="View"></BreadcrumbNav>

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

                                                        <th className="pointer" title="Click to sort">Server</th>
                                                        <th className="pointer" title="Click to sort">DHCP Server</th>
                                                        <th className="pointer" title="Click to sort">Active Address</th>
                                                        <th className="pointer" title="Click to sort">Active MAC Address</th>
                                                        <th className="pointer" title="Click to sort">Active Host Name</th>
                                                        <th className="pointer" title="Click to sort">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    {
                                                        DHCPLease.map(p => (
                                                            <tr key={p.id}>
                                                                <td>{p.serverName}</td>
                                                                <td>{p.server}</td>
                                                                <td>{p.activeAddress}</td>
                                                                <td>{p.macAddress}</td>
                                                                <td>{p.hostName}</td>
                                                                <td>{p.status}</td>
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

export default DHCPLease;