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
import WatchDog from "./Components/Pages/WatchDog";
import { WatchDogDetails } from "./Components/Pages/WatchDogDetails";
import AddWatchDog from "./Components/Pages/AddWatchDog";
import WatchDogRemove from "./Components/Pages/WatchDogRemove";
import WatchDogEdit from "./Components/Pages/WatchDogEdit";
import Mikrotik from "./Components/Pages/Mikrotik";
import MikrotikRemove from "./Components/Pages/MikrotikRemove";
import AddMikrotik from "./Components/Pages/AddMikrotik";
import MikrotikEdit from "./Components/Pages/MikrotikEdit";

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

                        {/* Watch_Dog */}
                        <Route exact path="/watchdog">
                           <WatchDog/>
                        </Route>
                        <Route exact path="/watchdog/add">
                           <AddWatchDog/>
                        </Route>
                        <Route exact path="/watchdog/edit/:id">
                           <WatchDogEdit/>
                        </Route>
                        
                        <Route exact path="/watchdog/view/:id">
                           <WatchDogDetails/>
                        </Route>
                        
                        <Route exact path="/watchdog/delete/:id">
                           <WatchDogRemove/>
                        </Route>
                        
                        {/* Mikrotik */}
                        <Route exact path="/server">
                           <Mikrotik/>
                        </Route>
                        <Route exact path="/server/delete/:id">
                           <MikrotikRemove/>
                        </Route>
                        <Route exact path="/server/add">
                           <AddMikrotik/>
                        </Route>
                        <Route exact path="/server/edit/:id">
                           <MikrotikEdit/>
                        </Route>

                        


                    </Switch>



                
                {/* END wrapper */}
            </>
        </Router>
    );
}
export default AppMain;