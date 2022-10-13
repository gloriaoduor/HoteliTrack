import AddGuest from "./AddGuest";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Dashboard(){

    return (

        <div className="d-flex" id="wrapper">
            {/* <!-- Sidebar--> */}
            <SideBar/>

            {/* <!-- Page content wrapper--> */}
            <div className="main" id="page-content-wrapper">

                {/* <!-- Page content--> */}
                <div className="container-fluid content-container">
                    <AddGuest/>
                </div>
            </div>   
        </div>
        
       

    );
}
export default Dashboard;