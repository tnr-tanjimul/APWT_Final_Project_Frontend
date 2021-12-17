import SideMenu from "./SideMenu";
import UserBox from "./UserBox";

function LeftSideBar() {
    return (
        <div className="left-side-menu">

            <div className="h-100 menuitem-active" data-simplebar="init">
                <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                            <div className="simplebar-content-wrapper" style={{ height: "100%", overflow: "hidden scroll" }}>
                                <div className="simplebar-content" style={{ padding: "0px" }}>

                                    {/* User box */}

                                    <UserBox></UserBox>
                                    {/*- Sidemenu */}
                                    <SideMenu></SideMenu>
                                    {/* End Sidebar */}

                                    <div className="clearfix"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="simplebar-placeholder" style={{ width: "auto", height: "872px" }}></div>
                </div>
                <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                    <div className="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div>
                </div>
                <div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}>
                    <div className="simplebar-scrollbar"
                        style={{ height: "51px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}></div>
                </div>
            </div>
            {/* Sidebar -left */}

        </div>

    );
}
export default LeftSideBar;