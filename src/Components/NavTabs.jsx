import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav nav-tabs nav-bordered nav-justified" role="tablist">
            <li className="nav-item">
                <Link className="nav-link py-2" data-toggle="tab" to="#chat-tab" role="tab">
                    <i className="mdi mdi-message-text d-block font-22 my-1"></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link py-2" data-toggle="tab" to="#tasks-tab" role="tab">
                    <i className="mdi mdi-format-list-checkbox d-block font-22 my-1"></i>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link py-2 active" data-toggle="tab" to="#settings-tab" role="tab">
                    <i className="mdi mdi-cog-outline d-block font-22 my-1"></i>
                </Link>
            </li>
        </ul>
    );
}
export default NavTabs;