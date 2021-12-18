import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const SubZoneAdd = (props) => {

    let [name, setName] = useState("");
    let [zoneId, setZoneId] = useState("");
    const [apiData, setApidata] = useState([]);


    let history = useHistory();
    function handleRedirect() {
        history.push("/sub-zone");
    }

    const fetchZone = () => {
    axios.get("zone/")
        .then(resp => {
            console.log(resp.data);
            setApidata(resp.data);
        }).catch(err => {
            console.log(err);
        });

    }

    const AddSubmit = () => {
        var obj = { name: name,zoneId: zoneId };
        axios.post("sub-zone/add", obj)
            .then(resp => {
                var token = resp.data;


                alert(token.message);

                console.log(token);

                handleRedirect();


            }).catch(err => {
                console.log(err);
            });


    }



    return (
        <>
            <div id="wrapper">
                <TopBar></TopBar>
                <LeftSideBar></LeftSideBar>
                <div className="content-page">
                    <div className="content">


                        <div className="container-fluid">

                            {/* start page title */}

                            <BreadcrumbNav page="Add" title="Server"></BreadcrumbNav>

                            <div className="row">
                                <div className="col-8">

                                    <div className="card">


                                        <div className="card-body col-md-12">
                                            <form className="row g-3">



                                                <div className="col-md-6 mb-2">
                                                    <label className="form-label">Status</label><br />
                                                    <select onClick={fetchZone} value={zoneId} onChange={(e) => setZoneId(e.target.value)} className="form-select col-md-6" >

                                                    {
                                                        apiData.map(p => (
                                                        <option key={p.id} value={p.id} >{p.name}</option>
                                                        
                                                        ))
                                                    }
                                                    </select>
                                                </div>


                                                <div className="col-md-6 mb-2">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" name="name" id="name" />
                                                </div>




                                            </form>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary mt-3" onClick={AddSubmit}>Save</button>

                                            </div>


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

export default SubZoneAdd;