import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";




import React, { useState, useEffect } from "react";
import axios from "axios";


const Mikrotik = (props) => {
    const [apiData, setApidata] = useState([]);

    useEffect(() => {
        axios.get("server/")
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

                            <BreadcrumbNav page="Mikrotik" title="Server"></BreadcrumbNav>

                            <div className="row">
                                <div className="col-12">
                                <h1 ><Link className="btn btn-primary" to={"server/add"}>Add Server</Link></h1>
                                {/* <h1 className="btn btn-primary">Add Server</h1> */}
                                    <div className="card">
                                          
                                        
                                        <div className="card-body">
                                            <table id="datatable-buttons" className="table table-striped dt-responsive nowrap w-100">

                                                <thead>
                                                    <tr>
                                                        <th className="pointer" title="Click to sort">Id</th>
                                                        <th className="pointer" title="Click to sort">Name</th>
                                                        <th className="pointer" title="Click to sort">IP</th>
                                                        <th className="pointer" title="Click to sort">Port</th>
                                                        <th className="pointer" title="Click to sort">DNS</th>
                                                        <th className="pointer" title="Click to sort">User</th>
                                                        <th className="pointer" title="Click to sort">Active</th>
                                                        <th className="pointer" title="Click to sort">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    {
                                                        apiData.map(p => (
                                                            <tr key={p.id}>
                                                                
                                                                <td>{p.id}</td>
                                                                <td>{p.name}</td>    
                                                                <td>{p.ip}</td>
                                                                <td>{p.port}</td>
                                                                <td>{p.dnsName}</td>
                                                                <td>{p.username}</td>
                                                                <td>{p.isActive}</td>

                                                                <td>
                                                                        <Link to={"/server/edit/" + p.id}><i className="fas fa-user-edit pointer mr-2"></i></Link>
                                                                      
                                                                        <Link className="fa fa-minus-square text-danger pointer " to={"/server/delete/" + p.id}></Link>
                                                                        {/* <Link to={"watchdog/view/" + p.id}>
                                                                        view</Link> */}

                                                                </td>
                                                                
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

export default Mikrotik;