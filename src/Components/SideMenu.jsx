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
                    <a href="#h_group" data-toggle="collapse">
                        <i className="mdi mdi-bullseye"></i>
                        <span> Group </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="h_group">
                        <ul className="nav-second-level">
                            <li> <Link to="/group">View</Link> </li>
                            <li><Link to="/group/create">Create</Link></li>

                        </ul>
                    </div>

                </li>


                <li>
                    <a href="#h_contact" data-toggle="collapse">
                        <i className="mdi mdi-account-multiple-outline"></i>
                        <span> Contact </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="h_contact">
                        <ul className="nav-second-level">
                            <li> <Link to="/contact">View</Link> </li>
                            <li><Link to="/contact/create">Create</Link></li>

                        </ul>
                    </div>

                </li>


                <li>
                    <a href="#h_template" data-toggle="collapse">
                        <i className="mdi mdi-view-dashboard-outline"></i>
                        <span> Template </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="h_template">
                        <ul className="nav-second-level">
                            <li> <Link to="/template">View</Link> </li>
                            <li><Link to="/template/create">Create</Link></li>

                        </ul>
                    </div>

                </li>


                <li>
                    <Link to="/sender">
                        <i className="fe-message-square mr-1"></i>
                        <span> Sender </span>
                    </Link>
                </li>


                <li>
                    <Link to="/bulksender">
                        <i className="mdi mdi-ballot-recount mr-1"></i>
                        <span> Bulk Sender </span>
                    </Link>
                </li>


                <li>
                    <Link to="/messages">
                        <i className="fe-bar-chart-line mr-1"></i>
                        <span> Messeges </span>
                    </Link>
                </li>


                <li>
                    <a href="#h_user" data-toggle="collapse">
                        <i className="mdi mdi-account-convert"></i>
                        <span> User </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="h_user">
                        <ul className="nav-second-level">
                            <li> <Link to="/user">View</Link> </li>
                            <li><Link to="/user/create">Create</Link></li>

                        </ul>
                    </div>

                </li>


                <li>
                    <a href="#h_SenderNumber" data-toggle="collapse">
                        <i className="fa fa-server"></i>
                        <span> SenderNumber </span>
                        <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="h_SenderNumber">
                        <ul className="nav-second-level">
                            <li> <Link to="/sender-number">View</Link> </li>
                            <li><Link to="/sender-number/create">Create</Link></li>

                        </ul>
                    </div>

                </li>


                <li>
                    <Link to="/admin" className="active">
                        <i className="fe-message-square mr-1"></i>
                        <span> Admin </span>
                    </Link>
                </li>











            </ul>
        </div>
    );
}

export default SideMenu;