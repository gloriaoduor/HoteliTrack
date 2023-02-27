import React from "react";
// import AddGuest from "./AddGuest";
// import { Modal, Button } from "react-bootstrap";

function GuestTable(){
    return (
      <div className="table-container mt-4 mx-4 bg-light p-4 h-custom row d-flex">
      <div className="row">
          <div className="col">
              <h5 className="pb-2 mb-0">Guest List</h5>
          </div>
          <div className="col text-right">
              <button className="btn btn-default low-height-btn" >
              
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
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Id-No</th>
                      <th>Email</th>
                      <th>Nationality</th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><input type="checkbox"/></td>
                      <td>Gloria </td>
                      <td>Oduor</td>
                      <td>11111</td>
                      <td>xyz@gmail.com</td>
                      <td>Kenyan</td>
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
                      <td>Aphonso</td>
                      <td>Kip</td>
                      <td>22222</td>
                      <td>abc@gmail.com</td>
                      <td>Tanzanian</td>
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
    //     <><div
    //     className="d-flex align-items-center justify-content-center"
    //     style={{ height: "100vh" }}
    //   >
    //     <Button variant="primary">
    //       Launch demo modal
    //     </Button>
    //   </div>
    // <Modal show={this.state.isOpen} >
    //     <Modal.Header closeButton>
    //       <Modal.Title>Modal heading</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    //     <Modal.Footer>
    //       <Button variant="secondary">Close</Button>
    //     </Modal.Footer>
    //   </Modal>
    //   </>
    );
}

export default GuestTable;
