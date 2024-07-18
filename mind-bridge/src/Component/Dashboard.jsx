import React from "react";
import NavigationBar from "./NavigationBar";
const Dashboard = ({user,handleSignOut}) => {
    return (<>
        <NavigationBar user={user} onSignOut={handleSignOut} />
    </>);
}
export default Dashboard;