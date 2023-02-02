import React from "react";
// import { useState } from "react";

function EmpTable(){

    // const  guestData, setGuestData = []

    // function fetchDetails(){
    //     fetch('/guests')
    //     .then(res => res.json())
    //     .then(json => json.guestData)
    //     // .then(guestData => setGuestData)
    // }
    return (
      <div className="table-container mt-4 mx-4 bg-light p-4 h-custom row d-flex">
      <div className="row">
          <div className="col">
              <h5 className="pb-2 mb-0">Employee List</h5>
          </div>
          <div className="col text-right">
              <button className="btn btn-default low-height-btn" >
              {/* onClick={(displayForm)} */}
                  <i className="fa fa-plus"></i>
              </button>
          </div>
      </div>
      <p>
      <br></br>
      </p>
      <div className="d-flex text-muted">
          <table className="table">
              <thead>
                  <tr>
                      <th><input type="checkbox"/></th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Guest Assigned(ID)</th>
                      <th></th>
                      <th></th>
                      
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><input type="checkbox"/></td>
                      <td>1</td>
                      <td>Betty </td>
                      <td>1</td>
                      <td> </td>
                      <td> </td>
                     
                      <td>
                          <div className="dropdown table-action-dropdown">
                              <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                  <li><a className="dropdown-item" href="www.google.com"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                  <div className="dropdown-divider"></div>
                                  <li><a className="dropdown-item text-danger" href="www.google.com"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                              </ul>
                          </div>
                      </td>
                  </tr>
                  <tr>
                      <td><input type="checkbox"/></td>
                      <td>2</td>
                      <td>Buju </td>
                      <td>2</td>
                      <td> </td>
                      <td> </td>
                      <td>
                          <div className="dropdown table-action-dropdown">
                              <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                  <li><a className="dropdown-item" href="www.google.com"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                  <div className="dropdown-divider"></div>
                                  <li><a className="dropdown-item text-danger" href="www.google.com"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                              </ul>
                          </div>
                      </td>
                  </tr>
                 
              </tbody>
          </table>
      </div>
      <nav className="table-bottom-center-pagination" aria-label="Page navigation example ">
          <ul className="pagination">
              <li className="page-item">
              <a className="page-link" href="www.google.com" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
              </a>
              </li>
              <li className="page-item"><a className="page-link" href="www.google.com">1</a></li>
              <li className="page-item"><a className="page-link" href="www.google.com">2</a></li>
              <li className="page-item"><a className="page-link" href="www.google.com">3</a></li>
              <li className="page-item">
              <a className="page-link" href="www.google.com" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
              </a>
              </li>
          </ul>
      </nav>
  </div>

    );
}

export default EmpTable;