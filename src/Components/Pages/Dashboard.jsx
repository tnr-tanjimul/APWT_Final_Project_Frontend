import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import DashItem from "./DashItem";
import { Link } from "react-router-dom";
import IsLoggegIn from "../IsLoggegIn";


function Dashboard() {
    
    return (
    <>
    <IsLoggegIn></IsLoggegIn>
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
                        <DashItem classColor="info" icon="fe-users" text="All Clients" count="200"></DashItem>
                        <DashItem classColor="success" icon="fe-user-check" text="Active Client" count="190"></DashItem>
                        <DashItem classColor="warning" icon="fe-user-x" text="Inactive Client" count="500"></DashItem>
                        <DashItem classColor="danger" icon="fe-user-minus" text="Left/Pending Client" count="170"></DashItem>
                        <DashItem classColor="pink" icon="fe-shopping-cart" text="Personal Invoice" count="128"></DashItem>
                        <DashItem classColor="info" icon="fe-bar-chart" text="Personal Invoice Amount" count="200"></DashItem>
                        <DashItem classColor="primary" icon="fe-heart" text="Personal Balance" count="200"></DashItem>
                        <DashItem classColor="warning" icon="fe-eye" text="Personal Commission" count="200"></DashItem>
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