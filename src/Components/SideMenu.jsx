import { Link } from "react-router-dom";
function SideMenu() {
    return (
        <div id="sidebar-menu" className="show">

            <ul id="side-menu">





                <li className="menu-title">Navigation</li>

                <li className="menuitem-active">
                    <Link to="/" className="active">
                        <i className="mdi mdi-view-dashboard-outline"></i>
                        <span> Dashboard </span>
                    </Link>
                </li>

                <li>
                    <a href="#client-billing" data-toggle="collapse">
                        <i className="mdi mdi-account-cash"></i>
                        <span> Billing </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="client-billing">
                        <ul className="nav-second-level">
                            <li><Link to="/client-accounts">All Accounts</Link></li>
                        </ul>

                        <ul className="nav-second-level">
                            <li><Link to="/client-invoices">Invoices</Link></li>
                        </ul>
                    </div>
                </li>


                <li className="menu-title mt-2">PPPoE</li>

                <li>
                    <a href="#pppoe1" data-toggle="collapse">
                        <i className="mdi mdi-account-multiple-outline"></i>
                        <span> Client </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="pppoe1">
                        <ul className="nav-second-level">
                            <li><Link to="pppoe-client-add">Add New</Link></li>
                            <li> <Link to="pppoe-client-renew">Renew</Link></li>
                        </ul>
                    </div>
                </li>


                <li>
                    <a href="#pppoeSection" data-toggle="collapse">
                        <i className="mdi mdi-bullseye"></i>
                        <span> PPPoE </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="pppoeSection">
                        <ul className="nav-second-level">
                            <li><Link to="/pppoe/users">All Users</Link></li>
                            <li><Link to="/pppoe/active">Active Users</Link></li>
                            <li><Link to="/pppoe/online">Online Users</Link></li>
                            <li><Link to="/pppoe/profiles">Profiles</Link></li>
                           
                        </ul>
                    </div>
                </li>




                <li className="menu-title mt-2">Hotspot</li>

                <li>
                    <a href="#hotspot" data-toggle="collapse">
                        <i className="mdi mdi-account-multiple-outline"></i>
                        <span> Client </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="hotspot">
                        <ul className="nav-second-level">
                            <li><Link to="/hotspot/client-add-retail">Add New</Link></li>
                            <li> <Link to="/hotspot/client-renew">Renew</Link></li>
                        </ul>
                    </div>
                </li>








                <li>
                    <a href="#sidebarIcons" data-toggle="collapse">
                        <i className="mdi mdi-wifi"></i>
                        <span> Hotspot </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="sidebarIcons">
                        <ul className="nav-second-level">


                            <li><Link to="/hotspot/users">All Users</Link></li>
                            <li><Link to="/hotspot/active">Active Users</Link></li>
                            <li><Link to="/hotspot/online">Online Users</Link></li>
                            <li><Link to="/hotspot/profiles">Profiles</Link></li>
                            <li><Link to="/hotspot/log">Log</Link></li>
                            <li><Link to="/hotspot/mac-log">Mac Log</Link></li>
                            
                        </ul>
                    </div>
                </li>



                <li><Link to="/dhcp-leases">
                    <i className="mdi mdi-ballot-recount"></i>
                    <span> DHCP Leases </span>
                </Link>
                </li>

                <li><Link to="/traffic-monitor">
                    <i className="mdi mdi-chart-areaspline"></i>
                    <span> Traffic Monitor </span>
                </Link></li>
                <li className="menu-title mt-2">Configuration</li>

                <li><Link to="/company">
                    <i className="mdi mdi-account-convert"></i>
                    <span> Company </span>
                </Link></li>
                <li><Link to="/merchant_payments">
                    <i className="mdi mdi-credit-card-clock"></i>
                    <span> All Payments </span>
                </Link></li>

                <li>
                    <a href="#h_server" data-toggle="collapse">
                        <i className="fa fa-server"></i>
                        <span> Server </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="h_server">
                        <ul className="nav-second-level">
                            <li><Link to="/watchdog">Watch Dog</Link></li>
                            <li><Link to="/server">Mikrotik</Link></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <a href="#h_Configuration" data-toggle="collapse">
                        <i className="fa fa-server"></i>
                        <span> Configuration </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="h_Configuration">
                        <ul className="nav-second-level">
                            <li><Link to="/zone">Zone</Link></li>
                            <li><Link to="/sub-zone">Sub Zone</Link></li>
                        </ul>
                    </div>
                </li>











            </ul>
        </div>
    );
}

export default SideMenu;