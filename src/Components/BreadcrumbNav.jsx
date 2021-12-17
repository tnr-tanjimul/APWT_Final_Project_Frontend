import { Link } from "react-router-dom";
function BreadcrumbNav(props) {
    const newLocal = <div className="row">
        <div className="col-12">
            <div className="page-title-box">
                <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><Link to="#">SmartISP</Link></li>
                        <li className="breadcrumb-item"><Link to="#">{props.page}</Link></li>

                    </ol>
                </div>
                <h4 className="page-title">{props.title}</h4>
            </div>
        </div>
    </div>;
    return (
        newLocal
    );
}
export default BreadcrumbNav;