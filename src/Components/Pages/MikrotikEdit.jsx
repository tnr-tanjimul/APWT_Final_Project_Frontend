import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import React, { useState, useEffect } from "react";
import axios from "axios";
import  { Redirect } from 'react-router-dom';
import { useParams } from "react-router-dom";


const MikrotikEdit = (props) => {
      const {id} = useParams();
      let [name, setName] = useState("");
      let [ip, setIp] = useState("");
      let [port, setPort] = useState("");
      let [dnsName, setDnsName] = useState("");
      let [username, setUsername] = useState("");
      let [password, setPassword] = useState("");


      const UpdateSubmit= ()=>{
            var obj = {name: name,  ip: ip, port:port, dnsName: dnsName, username: username, password: password};
            axios.post("server/edit/"+id,obj)
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
                                                                      
                                                                        <div className="col-6 mb-2">
                                                                              <label className="form-label">IP</label>
                                                                              <input type="text" value={ip} onChange={(e)=>setIp(e.target.value)} className="form-control" name="ip" id="ip"/>
                                                                        </div>
                                                                        <div className="col-6">
                                                                              <label className="form-label">Port</label>
                                                                              <input type="number" value={port} onChange={(e)=>setPort(e.target.value)} className="form-control" name="port" id="port"/>
                                                                        </div>
                                                                        
                                                                        <div className="col-md-6 mb-2">
                                                                              <label className="form-label">DNS</label>
                                                                              <input type="text" value={dnsName} onChange={(e)=>setDnsName(e.target.value)} className="form-control" name="dnsName" id="dnsName"/>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                              <label className="form-label">Username</label>
                                                                              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" name="username" id="username"/>
                                                                        </div>
                                                                        
                                                                        <div className="col-md-6">
                                                                              <label className="form-label">Password</label>
                                                                              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" name="password" id="password"/>
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

export default MikrotikEdit;