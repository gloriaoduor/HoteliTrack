import React from "react";
import { Link } from 'react-router-dom';


function AddGuest(){

    function onChangeValue(e){
        console.log(e.target.value)
    }
    // onValueChange(e) {
    //     this.setState({
    //       selectedOption: e.target.value
    //     });
    //   }

    return (
        <form className="p-3 mt-3 w-100 bg-light">
            {/* names */}
            <div class="col-md-12">
                <div className="row m-1">
                    <div className="col-lg-6">
                        <input type="text" className="form-control form-control-md" placeholder="First Name" />
                    </div>
                    <div className="col-lg-6">
                        <input type="text" className="form-control form-control-md" placeholder="Second Name" />
                    </div>
                </div>
            
                {/*  Nationality and Id number*/}
                <div className="row m-1">
                    <div className="col-lg-6">
                        <input type="text" class="form-control" placeholder="Nationality"/>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" class="form-control" placeholder="ID no."/>
                    </div>
                </div>
                {/* Contacts */}
                <div className="row m-1">
                    <div className="col-lg-6">
                        <input type="text" class="form-control" placeholder="Email"/>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" class="form-control" placeholder="Tel. No"/>
                    </div>
                </div>
                {/* Gender */}
                <div className="row m-1" onChange={onChangeValue}>              {/* use function onValueChange instead */}
                    <div className="form-check form-check-inline ">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline col-lg-6">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/>
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>

                </div>
                {/* Room allocation */}
                <div className="row m-1">
                    <div className="col-lg-6">
                        <input type="text" class="form-control" placeholder="Room Type"/>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" class="form-control" placeholder="Room no."/>
                    </div>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                    <Link to="/" type="button" className="btn btn-primary btn-md">Add Guest</Link>
                </div>
            </div>
        </form>
       
    );
}
export default AddGuest;