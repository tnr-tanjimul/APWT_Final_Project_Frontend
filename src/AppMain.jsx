import Dashboard from "./Components/Pages/Dashboard";
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'

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

import HotspotProfileRemove from "./Components/Pages/HotspotProfileRemove";
import Logout from "./Components/Pages/Logout";
import HotspotOnlineRemove from "./Components/Pages/HotspotOnlineRemove";
import PPPOEUsers from "./Components/Pages/PPPOEUsers";
import PPPOEUsersActive from "./Components/Pages/PPPOEUsersActive";
import PPPOEUsersOnline from "./Components/Pages/PPPOEUsersOnline";
import PPPOEProfiles from "./Components/Pages/PPPOEProfiles";
import PPPOEProfileRemove from "./Components/Pages/PPPOEProfileRemove";
import PPPPOEOnlineRemove from "./Components/Pages/PPPOEOnlineRemove";
import Zone from "./Components/Pages/Zone";
import ZoneRemove from "./Components/Pages/ZoneRemove";
import SubZone from "./Components/Pages/SubZone";
import SubZoneRemove from "./Components/Pages/SubZoneRemove";
import ZoneAdd from "./Components/Pages/ZoneAdd";
import SubZoneAdd from "./Components/Pages/SubZoneAdd";
import Company from "./Components/Pages/Company";
import CompanyRemove from "./Components/Pages/CompanyRemove";

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

                    <Route exact path="/logout">
                        <Logout></Logout>
                    </Route>


                    <Route exact path="/register">
                        <AuthRegistration></AuthRegistration>
                    </Route>

                    <Route exact path="/dhcp-leases">
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

                    <Route exact path="/hotspot/online/remove/:serverId/:name">
                        <HotspotOnlineRemove></HotspotOnlineRemove>
                    </Route>

                    <Route exact path="/hotspot/profiles">
                        <HotspotProfiles></HotspotProfiles>
                    </Route>


                    {/* Watch_Dog */}
                    <Route exact path="/watchdog">
                        <WatchDog />
                    </Route>
                    <Route exact path="/watchdog/add">
                        <AddWatchDog />
                    </Route>
                    <Route exact path="/watchdog/edit/:id">
                        <WatchDogEdit />
                    </Route>

                    <Route exact path="/watchdog/view/:id">
                        <WatchDogDetails />
                    </Route>

                    <Route exact path="/watchdog/delete/:id">
                        <WatchDogRemove />
                    </Route>

                    {/* Mikrotik */}
                    <Route exact path="/server">
                        <Mikrotik />
                    </Route>
                    <Route exact path="/server/delete/:id">
                        <MikrotikRemove />
                    </Route>
                    <Route exact path="/server/add">
                        <AddMikrotik />
                    </Route>
                    <Route exact path="/server/edit/:id">
                        <MikrotikEdit />
                    </Route>

                    {/* Mikrotik */}
                    <Route exact path="/zone">
                        <Zone></Zone>
                    </Route>
                    <Route exact path="/zone/delete/:id">
                        <ZoneRemove></ZoneRemove>
                    </Route>
                    <Route exact path="/zone/add">
                        <ZoneAdd></ZoneAdd>
                    </Route>
                    <Route exact path="/zone/edit/:id">
                        <Zone></Zone>
                    </Route>

                    {/* Mikrotik */}
                    <Route exact path="/sub-zone">
                        <SubZone></SubZone>
                    </Route>
                    <Route exact path="/sub-zone/delete/:id">
                        <SubZoneRemove></SubZoneRemove>
                    </Route>
                    <Route exact path="/sub-zone/add">
                        <SubZoneAdd></SubZoneAdd>
                    </Route>
                    <Route exact path="/sub-zone/edit/:id">
                        <SubZone></SubZone>
                    </Route>


                    <Route exact path="/company">
                        <Company></Company>
                    </Route>
                    <Route exact path="/company/delete/:id">
                        <CompanyRemove></CompanyRemove>
                    </Route>
                    <Route exact path="/company/add">
                        <ZoneAdd></ZoneAdd>
                    </Route>
                    <Route exact path="/company/edit/:id">
                        <MikrotikEdit />
                    </Route>

                    <Route exact path="/hotspot/profiles/remove/:serverId/:name">
                        <HotspotProfileRemove></HotspotProfileRemove>
                    </Route>


                    <Route exact path="/pppoe/users">
                        <PPPOEUsers></PPPOEUsers>
                    </Route>
                    <Route exact path="/pppoe/active">
                        <PPPOEUsersActive></PPPOEUsersActive>
                    </Route>

                    <Route exact path="/pppoe/online">
                        <PPPOEUsersOnline></PPPOEUsersOnline>
                    </Route>

                    <Route exact path="/pppoe/online/remove/:serverId/:name">
                        <PPPPOEOnlineRemove></PPPPOEOnlineRemove>
                    </Route>

                    <Route exact path="/pppoe/profiles">
                        <PPPOEProfiles></PPPOEProfiles>
                    </Route>

                    <Route exact path="/pppoe/profiles/remove/:serverId/:name">
                        <PPPOEProfileRemove></PPPOEProfileRemove>

                    </Route>




                </Switch>





            </>
        </Router>
    );
}
export default AppMain;