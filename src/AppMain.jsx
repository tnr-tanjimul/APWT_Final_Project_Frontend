import LeftSideBar from "./Components/LeftSidebar";
import Dashboard from "./Components/Pages/Dashboard";
import RightSidebar from "./Components/RightSidebar";
import TopBar from "./Components/TopBar";
import { BrowserRouter as Router, Route, Switch,useParams } from 'react-router-dom'

import Contact from "./Components/Pages/Contact";
import AuthLogin from "./Components/Auth/AuthLogin";
import AuthRegistration from "./Components/Auth/AuthRegistration";
import GroupCreate from "./Components/Pages/GroupCreate";
import GroupView from "./Components/Pages/GroupView";
import ContactView from "./Components/Pages/ContactView";
import ContactCreate from "./Components/Pages/ContactCreate";
import TemplateView from "./Components/Pages/TemplateView";
import TemplateCreate from "./Components/Pages/TemplateCreate";
import Sender from "./Components/Pages/Sender";
import BulkSender from "./Components/Pages/BulkSender";
import MessagesView from "./Components/Pages/MessagesView";
import UserView from "./Components/Pages/UserView";
import UserCreate from "./Components/Pages/UserCreate";
import SenderNumberView from "./Components/Pages/SenderNumberView";
import SenderNumberCreate from "./Components/Pages/SenderNumberCreate";
function AppMain() {
    return (
        <Router>
            <>
                {/* Begin page */}
                
                    


                    <Switch>
                        <Route exact path="/">
                            <Dashboard></Dashboard>
                        </Route>

                        <Route exact path="/group/">
                            <GroupView></GroupView>
                        </Route>
                        <Route exact path="/group/create">
                            <GroupCreate></GroupCreate>
                        </Route>

                        <Route exact path="/contact">
                            <ContactView></ContactView>
                        </Route>

                        <Route exact path="/contact/create">
                            <ContactCreate></ContactCreate>
                        </Route>
                        

                        <Route exact path="/template">
                            <TemplateView></TemplateView>
                        </Route>

                        <Route exact path="/template/create">
                            <TemplateCreate></TemplateCreate>
                        </Route>

                        <Route exact path="/sender">
                            <Sender></Sender>
                        </Route>

                        <Route exact path="/messages">
                            <MessagesView></MessagesView>
                        </Route>


                        <Route exact path="/bulksender">
                            <BulkSender></BulkSender>
                        </Route>


                        <Route exact path="/user">
                           <UserView></UserView>
                        </Route>
                        <Route exact path="/user/create">
                           <UserCreate></UserCreate>
                        </Route>


                        <Route exact path="/sender-number">
                           <SenderNumberView></SenderNumberView>
                        </Route>
                        <Route exact path="/sender-number/create">
                           <SenderNumberCreate></SenderNumberCreate>
                        </Route>

                        
                      

                        <Route exact path="/contact-1">
                            <div id="wrapper">
                                <TopBar></TopBar>
                                <LeftSideBar></LeftSideBar>
                                <Contact></Contact>
                            </div>
                            <RightSidebar></RightSidebar>
                            <div className="rightbar-overlay"></div>
                            
                        </Route>

                        <Route exact path="/login">
                            <AuthLogin></AuthLogin>
                        </Route>


                        <Route exact path="/register">
                            <AuthRegistration></AuthRegistration>
                        </Route>

                        


                    </Switch>



                
                {/* END wrapper */}
            </>
        </Router>
    );
}
export default AppMain;