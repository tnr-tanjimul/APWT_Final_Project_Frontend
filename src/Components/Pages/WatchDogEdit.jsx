import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import React, { useState, useEffect } from "react";
import axios from "axios";
import  { Redirect } from 'react-router-dom';
import { useParams } from "react-router-dom";


const WatchDogEdit = (props) => {
      const {id} = useParams();
      let [name, setName] = useState("");
      let [companyId, setCompanyId] = useState("");
      let [ip, setIp] = useState("");
      let [port, setPort] = useState("");
      let [status, setStatus] = useState("");
      let [macAddress, setMacAddress] = useState("");
      let [type, setType] = useState("");
      let [isActive, setIsActive] = useState("");


      const UpdateSubmit= ()=>{
            var obj = {name: name, companyId: companyId, ip: ip, port:port, status: status, macAddress: macAddress, type: type, isActive: isActive};
            axios.post("http://127.0.0.1:8000/api/watchdog/edit/"+id,obj)
            .then(resp=>{
                var token = resp.data;


                alert(token.message);
                
                console.log(token);
                
                
            }).catch(err=>{
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
                                                                              <label className="form-label">Name</label>
                                                                              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" name="name" id="name"/>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                              <label className="form-label">Company Id</label>
                                                                              <input type="number" value={companyId} onChange={(e)=>setCompanyId(e.target.value)} className="form-control" name="companyId" id="companyId"/>
                                                                        </div>
                                                                        <div className="col-6 mb-2">
                                                                              <label className="form-label">IP</label>
                                                                              <input type="text" value={ip} onChange={(e)=>setIp(e.target.value)} className="form-control" name="ip" id="ip"/>
                                                                        </div>
                                                                        <div className="col-6">
                                                                              <label className="form-label">Port</label>
                                                                              <input type="number" value={port} onChange={(e)=>setPort(e.target.value)} className="form-control" name="port" id="port"/>
                                                                        </div>
                                                                        
                                                                        <div className="col-md-6 mb-2">
                                                                              <label className="form-label">Status</label>
                                                                              <input type="number" value={status} onChange={(e)=>setStatus(e.target.value)} className="form-control" name="status"/>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                              <label className="form-label">Mac Address</label>
                                                                              <input type="text" value={macAddress} onChange={(e)=>setMacAddress(e.target.value)} className="form-control" name="macAddress" id="macAddress"/>
                                                                        </div>
                                                                        <div className="col-md-6 mb-2">
                                                                              <label className="form-label">Type</label><br/>
                                                                              <select value={type} onChange={(e)=>setType(e.target.value)} className="form-select col-md-6" >
                                                                                    <option value="DEFAULT" >Choose...</option>
                                                                                    <option value="BY IP">By IP</option>
                                                                                    <option value="BY MAC">By MAC</option>
                                                                              </select>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                              <label className="form-label">Active</label>
                                                                              <input type="number" value={isActive} onChange={(e)=>setIsActive(e.target.value)} className="form-control" name="isActive" id="isActive"/>
                                                                        </div>


                                                                  </form>
                                                                  <div className="col-12">
                                                                        <button type="submit" id="UpdateSubmit" className="btn btn-primary mt-3" onClick={UpdateSubmit}>Update</button>
                                                                        
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

export default WatchDogEdit;