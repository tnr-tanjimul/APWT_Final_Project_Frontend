import LeftSideBar from "./Components/LeftSidebar";
import Dashboard from "./Components/Pages/Dashboard";
import RightSidebar from "./Components/RightSidebar";
import TopBar from "./Components/TopBar";
import { BrowserRouter as Router, Route, Switch,useParams } from 'react-router-dom'

import Contact from "./Components/Pages/Contact";
import AuthLogin from "./Components/Auth/AuthLogin";
import AuthRegistration from "./Components/Auth/AuthRegistration";
import DHCPLease from "./Components/Pages/DHCPLease";
import HotspotUsers from "./Components/Pages/HotspotUsers";
import HotspotUsersActive from "./Components/Pages/HotspotUsersActive";
import HotspotUsersOnline from "./Components/Pages/HotspotUsersOnline";
import HotspotProfiles from "./Components/Pages/HotspotProfiles";

function AppMain() {
    return (
        <Router>
            <>
                {/* Begin page */}
                
                    


                    <Switch>
                        <Route exact path="/">
                            <Dashboard></Dashboard>
                        </Route>

                       

                        <Route exact path="/login">
                            <AuthLogin></AuthLogin>
                        </Route>


                        <Route exact path="/register">
                            <AuthRegistration></AuthRegistration>
                        </Route>

                        <Route exact path="/dhcp-lease">
                           <DHCPLease></DHCPLease>
                        </Route>
                        <Route exact path="/hotspot/users">
                           <HotspotUsers></HotspotUsers>
                        </Route>
                        <Route exact path="/hotspot/active">
                           <HotspotUsersActive></HotspotUsersActive>
                        </Route>

                        <Route exact path="/hotspot/online">
                           <HotspotUsersOnline></HotspotUsersOnline>
                        </Route>

                        <Route exact path="/hotspot/profiles">
                           <HotspotProfiles></HotspotProfiles>
                        </Route>

                        


                    </Switch>



                
                {/* END wrapper */}
            </>
        </Router>
    );
}
export default AppMain;