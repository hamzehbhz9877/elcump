import React, {useEffect} from "react";
import MainLayout from "../components/layouts/mainlayout";
import {Route, Switch} from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Home from "../components/homePage/home";
import AdminPanel from "../components/panel/dashboard";
import AdminLayout from "../components/layouts/panel";
import ResetPassword from "../components/resetPassword/resetPassword";
import ForgetPassword from "../components/forgetPassword/forgetPassword";
import EventManagement from "../components/panel/dashboard/eventManagement/eventManagement";
import PackageManagement from "../components/panel/dashboard/eventManagement/packageManagement/packageManagement";
import EventInfrastructureSettings
    from "../components/panel/dashboard/eventManagement/eventInfrastructureSettings/eventInfrastructureSettings";
import RialSectionSettings
    from "../components/panel/dashboard/eventManagement/rialSectionSettings/rialSectionSettings";
import ManageRegistrationDocuments
    from "../components/panel/dashboard/eventManagement/manageRegistrationDocuments/manageRegistrationDocuments";
import AdjustingExhibitionServices
    from "../components/panel/dashboard/eventManagement/adjustingExhibitionServices/adjustingExhibitionServices";
import NewAes from "../components/panel/dashboard/eventManagement/adjustingExhibitionServices/newAES";
import NewAbg from "../components/panel/dashboard/eventManagement/manageBuildersGuarantee/newABG";
import ManageBuildersGuarantee
    from "../components/panel/dashboard/eventManagement/manageBuildersGuarantee/manageBuildersGuarantee";
import HallManagement from "../components/panel/dashboard/eventManagement/hallManagement/hallManagement";
import NewHme from "../components/panel/dashboard/eventManagement/hallManagement/newHME";


const Elcump = () => {

    useEffect(() => {
        //examin token
    }, []);

    return (
        <Switch>
            <Route path={["/panelDashboard"]}>
                <AdminLayout>
                    <Switch>
                        <Route component={NewHme} path="/panelDashboard/eventManagement/hallManagementEvents/newHme"/>
                        <Route component={HallManagement} path="/panelDashboard/eventManagement/hallManagementEvents"/>
                        <Route component={NewAbg} path="/panelDashboard/eventManagement/manageBuildersGuarantee/newAbg"/>
                        <Route component={ManageBuildersGuarantee} path="/panelDashboard/eventManagement/manageBuildersGuarantee"/>
                        <Route component={NewAes} path="/panelDashboard/eventManagement/adjustingExhibitionServices/newAes"/>
                        <Route component={AdjustingExhibitionServices} path="/panelDashboard/eventManagement/adjustingExhibitionServices"/>
                        <Route component={ManageRegistrationDocuments} path="/panelDashboard/eventManagement/manageRegistrationDocuments"/>
                        <Route component={RialSectionSettings} path="/panelDashboard/eventManagement/rialSectionSettings"/>
                        <Route component={EventInfrastructureSettings} path="/panelDashboard/eventManagement/eventInfrastructureSettings"/>
                        <Route component={PackageManagement} path="/panelDashboard/eventManagement/packageManagement"/>
                        <Route component={EventManagement} path="/panelDashboard/eventManagement"/>
                        <Route component={AdminPanel} path="/panelDashboard" exact/>
                    </Switch>
                </AdminLayout>
            </Route>
            <Route path={["/login","/register","/resetPassword","/forgetPassword"]}>
                    <Switch>
                        <Route component={Login} path={"/login"}/>
                        <Route component={Register} path={"/register"}/>
                        <Route component={ResetPassword} path={"/resetPassword"}/>
                        <Route component={ForgetPassword} path={"/forgetPassword"}/>
                    </Switch>
            </Route>
            <Route path={["/"]}>
                <MainLayout>
                    <Switch>
                        <Route path={"/tests"}/>
                        <Route path={"/inquiry"}/>
                        <Route path={"/courses"}/>
                        <Route path={"/protection"}/>
                        <Route path={"/contact"}/>
                        <Route path={"/"} component={Home} exact/>
                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    )

};
export default Elcump