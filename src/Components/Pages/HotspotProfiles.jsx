import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";




import React, { useState, useEffect } from "react";
import axios from "axios";


const HotspotProfiles = (props) => {
    const [apiData, setApidata] = useState([]);

    useEffect(() => {
        axios.get("hotspot/profiles")
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

                            <BreadcrumbNav page="Profiles" title="Hotspot"></BreadcrumbNav>

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
                                                        <th className="pointer" title="Click to sort"></th>
                                                        <th className="pointer" title="Click to sort">Name</th>
                                                        <th className="pointer" title="Click to sort">Server</th>
                                                        <th className="pointer" title="Click to sort">Adrs Pool</th>
                                                        <th className="pointer" title="Click to sort">Shared Users</th>
                                                        <th className="pointer" title="Click to sort">Rate Limit</th>
                                                        <th className="pointer" title="Click to sort">Validity</th>
                                                        <th className="pointer" title="Click to sort">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    {
                                                        apiData.map(p => (
                                                            <tr key={p.id}>
                                                                <td>
                                                                    <Link className="fa fa-minus-square text-danger pointer" to={"/hotspot/profiles/remove/" + p.serverId + "/" + p.name}></Link>

                                                                </td>
                                                                <td>{p.name}</td>
                                                                

                                                                <td>{p.serverName}</td>
                                                                <td>{p.addressPool}</td>
                                                                <td>{p.sharedUsers}</td>
                                                                <td>{p.rateLimit}</td>
                                                                <td>{p.validity}</td>
                                                                <td>{p.price}</td>
                                                                
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

export default HotspotProfiles;