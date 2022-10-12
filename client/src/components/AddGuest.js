import React from "react";

function AddGuest(){

    return (
        <div className="row d-flex justify-content-center align-items-center h-60">
            <div className="col-md-6">
            <form className="login-form">
          {/* <!-- name input --> */}
            <div className="form-outline mb-4">
            {/* <label className="form-label" htmlFor="form3Example3">First Name </label> */}
            <input type="name" id="form3Example3" className="form-control form-control-sm"
            placeholder="First Name" />
            </div> 

            {/* second name  */}
            <div className="form-outline mb-4">
            <input type="name" id="form3Example3" className="form-control form-control-sm"
            placeholder="Second Name" />
            </div> 

            {/* Identification number */}
            <div className="form-outline mb-4">
            <input type="name" id="form3Example3" className="form-control form-control-sm"
            placeholder="ID No." />
            </div>

            {/* Gender */}
            <div className="form-outline mb-4 ">
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
            </div>

            {/* is_a_citizen */}
            <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" htmlFor="form2Example3">Citizen of Kenya?</label>
            </div>

            </form>
            </div>
            
        </div>
    );
}
export default AddGuest;