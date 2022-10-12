import React from "react";
import { Link } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';


function Layout (){
    return (
        <div className="d-flex" id="wrapper">
                {/* <!-- Sidebar--> */}
                <div className="border-end sidenav" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom ">
                        {/* <Link to="/">
                            <img alt="Alt content" src={require('./../assets/images/logo.png')} />
                        </Link> */}
                    </div>
                    {/* Sidebar using slide burger menu */}
                    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Sidebar
          </a>
        </CDBSidebarHeader>
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

        {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
                </div>
                {/* <!-- Page content wrapper--> */}
                <div className="main" id="page-content-wrapper">
                    {/* <!-- Top navigation--> */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                    {/* <li className="nav-item"><a data-bs-toggle="modal" data-bs-target="#add-lead-modal"  className="nav-link highlighted-text" href="#!">Add lead</a></li> */}
                                    <li className="nav-item dropdown notifications">
                                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bell"></i></a>
                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#!">Profile</a>
                                            
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#!">Log Out</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Page content--> */}
                    {/* <div className="container-fluid content-container">
                        <ChildComponent {...this.props} />
                    </div> */}
                </div>
            </div>
        
    );
}

export default Layout;