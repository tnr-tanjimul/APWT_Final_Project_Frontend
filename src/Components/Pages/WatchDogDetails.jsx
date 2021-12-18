import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from '../Footer';
import TopBar from '../TopBar';
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import BreadcrumbNav from "../BreadcrumbNav";

export const WatchDogDetails = () => {
      const { id } = useParams();


      const [apiData, setApidata] = useState([]);

      useEffect(() => {
            const url = "http://127.0.0.1:8000/api/watchdog/view/" + id;
            axios.get(url)
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

                                          <BreadcrumbNav  title="Server"></BreadcrumbNav>

                                          <div className="row">
                                                <div className="col-12">
                                                      <div className="card">
                                                            <h4 className="page-title ml-2">{apiData.name}</h4>
                                                            <div className="card-body">

                                                                  <div className="row">
                                                                        Company ID : {apiData.companyId}
                                                                  </div>
                                                                  <div className="row">
                                                                        Name : {apiData.name}
                                                                  </div>
                                                                  <div className="row">
                                                                        IP : {apiData.ip}
                                                                  </div>

                                                                  <div className="row">
                                                                        Port : {apiData.port}
                                                                  </div>

                                                                  <div className="row">
                                                                        Status : {apiData.status}
                                                                  </div>


                                                                  <div className="row">
                                                                        Mac : {apiData.macAddress}
                                                                  </div>

                                                                  <div className="row">
                                                                        Type : {apiData.type}
                                                                  </div>

                                                                  <div className="row">
                                                                        Active : {apiData.isActive}
                                                                  </div>

                                                                  <div className="row">
                                                                        Check : {apiData.lastCheak}
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
