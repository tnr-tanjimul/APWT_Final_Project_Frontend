import NavTabs from "./NavTabs";
import TabPanes from "./TabPanes";

function RightSidebar() {
    return (
        <div className="right-bar">
            <div data-simplebar="init" className="h-100">
                <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                            <div className="simplebar-content-wrapper" style={{ height: "100%", overflow: "hidden scroll" }}>
                                <div className="simplebar-content" style={{ padding: "0px" }}>

                                    {/* Nav tabs */}
                                    <NavTabs></NavTabs>

                                    {/* Tab panes */}
                                    <TabPanes></TabPanes>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="simplebar-placeholder" style={{ width: "auto", height: "1285px" }}></div>
                </div>
                <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                    <div className="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div>
                </div>
                <div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}>
                    <div className="simplebar-scrollbar" style={{ height: "41px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}></div>
                </div>
            </div>
            {/* end slimscroll-menu*/}
        </div>
    );
}

export default RightSidebar;