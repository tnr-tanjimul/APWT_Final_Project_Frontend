function DashItem(props) {
    
    return (
        <div className="col-md-6 col-xl-3">
            <div className="widget-rounded-circle card-box">
                <div className="row">
                    <div className="col-6">
                        <div className={"avatar-lg rounded-circle bg-" + props.classColor + " border-" + props.classColor + " border shadow"}>
                            <i className={props.icon + " font-22 avatar-title text-white"}></i>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="text-right">
                            <h3 className="mt-1"><span data-plugin="counterup">{props.count}</span></h3>
                            <p className="text-muted mb-1 text-truncate">{props.text}</p>
                        </div>
                    </div>
                </div> {/* end row*/}
            </div> {/* end widget-rounded-circle*/}
        </div> 
        
    );
}
export default DashItem;