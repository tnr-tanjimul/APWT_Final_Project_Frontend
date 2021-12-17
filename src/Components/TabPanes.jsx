import { Link } from "react-router-dom";
function TabPanes() {
    return (
        <div className="tab-content pt-0">
            <div className="tab-pane active" id="settings-tab" role="tabpanel">
                <h6 className="font-weight-medium px-3 m-0 py-2 font-13 text-uppercase bg-light">
                    <span className="d-block py-1">Theme Settings</span>
                </h6>

                <div className="p-3">
                    <div className="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
                    </div>

                    <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Color Scheme</h6>
                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="color-scheme-mode"
                            defaultValue="light" id="light-mode-check" defaultChecked="" />
                        <label className="custom-control-label" htmlFor="light-mode-check">Light
                            Mode</label>
                    </div>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="color-scheme-mode"
                            defaultValue="dark" id="dark-mode-check" />
                        <label className="custom-control-label" htmlFor="dark-mode-check">Dark Mode</label>
                    </div>

                    {/* Width */}
                    <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Width</h6>
                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="width" defaultValue="fluid"
                            id="fluid-check" defaultChecked="" />
                        <label className="custom-control-label" htmlFor="fluid-check">Fluid</label>
                    </div>
                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="width" defaultValue="boxed"
                            id="boxed-check" />
                        <label className="custom-control-label" htmlFor="boxed-check">Boxed</label>
                    </div>

                    {/* Menu positions */}
                    <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Menus (Leftsidebar and
                        Topbar) Positon</h6>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="menus-position"
                            defaultValue="fixed" id="fixed-check" defaultChecked="" />
                        <label className="custom-control-label" htmlFor="fixed-check">Fixed</label>
                    </div>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="menus-position"
                            defaultValue="scrollable" id="scrollable-check" />
                        <label className="custom-control-label"
                            htmlFor="scrollable-check">Scrollable</label>
                    </div>

                    {/* Left Sidebar*/}
                    <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Left Sidebar Color</h6>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="leftsidebar-color"
                            defaultValue="light" id="light-check" defaultChecked="" />
                        <label className="custom-control-label" htmlFor="light-check">Light</label>
                    </div>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="leftsidebar-color"
                            defaultValue="dark" id="dark-check" />
                        <label className="custom-control-label" htmlFor="dark-check">Dark</label>
                    </div>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="leftsidebar-color"
                            defaultValue="brand" id="brand-check" />
                        <label className="custom-control-label" htmlFor="brand-check">Brand</label>
                    </div>

                    <div className="custom-control custom-switch mb-3">
                        <input type="radio" className="custom-control-input" name="leftsidebar-color"
                            defaultValue="gradient" id="gradient-check" />
                        <label className="custom-control-label" htmlFor="gradient-check">Gradient</label>
                    </div>

                    {/* size */}
                    <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Left Sidebar Size</h6>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="leftsidebar-size"
                            defaultValue="default" id="default-size-check" defaultChecked="" />
                        <label className="custom-control-label" htmlFor="default-size-check">Default</label>
                    </div>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="leftsidebar-size"
                            defaultValue="condensed" id="condensed-check" />
                        <label className="custom-control-label" htmlFor="condensed-check">Condensed
                            <small>(Extra Small size)</small></label>
                    </div>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="leftsidebar-size"
                            defaultValue="compact" id="compact-check" />
                        <label className="custom-control-label" htmlFor="compact-check">Compact
                            <small>(Small size)</small></label>
                    </div>

                    {/* User info */}
                    <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Sidebar User Info</h6>

                    <div className="custom-control custom-switch mb-1">
                        <input type="checkbox" className="custom-control-input" name="leftsidebar-user"
                            defaultValue="fixed" id="sidebaruser-check" />
                        <label className="custom-control-label" htmlFor="sidebaruser-check">Enable</label>
                    </div>


                    {/* Topbar */}
                    <h6 className="font-weight-medium font-14 mt-4 mb-2 pb-1">Topbar</h6>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="topbar-color"
                            defaultValue="dark" id="darktopbar-check" defaultChecked="" />
                        <label className="custom-control-label" htmlFor="darktopbar-check">Dark</label>
                    </div>

                    <div className="custom-control custom-switch mb-1">
                        <input type="radio" className="custom-control-input" name="topbar-color"
                            defaultValue="light" id="lighttopbar-check" />
                        <label className="custom-control-label" htmlFor="lighttopbar-check">Light</label>
                    </div>


                    <button className="btn btn-primary btn-block mt-4" id="resetBtn">Reset to
                        Default</button>

                    <Link to="#" className="btn btn-danger btn-block mt-3" target="_blank"><i
                        className="mdi mdi-basket mr-1"></i> Upgrade Now</Link>

                </div>

            </div>
        </div>
    );
}

export default TabPanes;