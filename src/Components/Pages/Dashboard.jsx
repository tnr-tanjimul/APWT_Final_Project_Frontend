import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import DashItem from "./DashItem";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
    <>
    <div id="wrapper">
        <TopBar></TopBar>
        <LeftSideBar></LeftSideBar>
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
                                <h4 className="page-title">Dashboard</h4>
                            </div>
                        </div>
                    </div>
                    {/* end page title */}

                    <div className="row">
                        <div className="col-12">
                        </div>
                        <DashItem classColor="info" icon="fe-message-square" text="Total Messages" count="17"></DashItem>
                        <DashItem classColor="success" icon="fe-message-square" text="Success" count="9"></DashItem>
                        <DashItem classColor="warning" icon="fe-message-square" text="Failed" count="8"></DashItem>
                        <DashItem classColor="success" icon="fe-heart" text="Balance" count="170"></DashItem>
                        <DashItem classColor="pink" icon="fe-bar-chart-line" text="Groups" count="6"></DashItem>
                        <DashItem classColor="info" icon="mdi mdi-view-dashboard-outline" text="Templates" count="2"></DashItem>
                        
                    </div>
                    {/* end row*/}
                </div>
            </div>
            {/* content */}
            {/* Footer Start */}
            <Footer></Footer>
            {/* end Footer */}


        </div>

        </div>
        <RightSidebar></RightSidebar>
        <div className="rightbar-overlay"></div>
        </>

    );
}

export default Dashboard;