import React from "react";
import { Link } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter
  } from 'cdbreact';


function SideBar (){

  function handleLogout(){
    fetch ("/logout", {
      method: "DELETE",
    })
    }

    return (
    <div className="border-end sidenav" id="sidebar-wrapper">
      
      {/* Static Sidebar */}
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">

          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>HoteliTrack</a>
          </CDBSidebarHeader>
          
          {/* Sidebar Content */}
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Link exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Guests</CDBSidebarMenuItem>
              </Link>
              <Link exact to="/new-guest" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Add new Guest</CDBSidebarMenuItem>
              </Link>
              <Link exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Employees</CDBSidebarMenuItem>
              </Link>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div className="sidebar-btn-wrapper" style={{padding: '20px 5px', }}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </CDBSidebarFooter>

        </CDBSidebar>
      </div>
      
    </div>
                
       
        
    );
}

export default SideBar;