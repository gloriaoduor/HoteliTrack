import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";


function AddGuest(){
    const [formData, setFormData] = useState ({
        fname:"",
        sname:"",
        id_no: "",
        nationality:"",
        gender:"",
        email:"",
        tel_no:"",

    })


    function onChangeValue(e){
        
        setFormData({gender: e.target.value})
        console.log(formData.gender)
    }
    // onValueChange(e) {
    //     this.setState({
    //       gender: e.target.value
    //     });
    //   }
    function handleSubmit(e){
        e.preventDefault();
        console.log("adding guest...")

        fetch("/guests",
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData }),
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    return (
        <form className="p-3 mt-3 w-100 bg-light" onSubmit={handleSubmit}>
            {/* names */}
            <div className="col-md-12">
                <div className="row m-1">
                    <div className="col-lg-6">
                        <input type="text"
                         className="form-control form-control-md"
                         value={fname} 
                         placeholder="First Name" />
                    </div>
                    <div className="col-lg-6">
                        <input type="text" 
                        className="form-control form-control-md"
                        value={sname}
                        placeholder="Last Name" />
                    </div>
                </div>
            
                {/*  Nationality and Id number*/}
                <div className="row m-1">
                    <div className="col-lg-6">
                        <input type="text" className="form-control"
                        value={nationality}
                        placeholder="Nationality"/>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" className="form-control" 
                        value={id_no}
                        placeholder="ID no."/>
                    </div>
                </div>
                {/* Contacts */}
                <div className="row m-1">
                    <div className="col-lg-6">
                        <input type="text" className="form-control" 
                        value={email}
                        placeholder="Email"/>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" className="form-control" 
                        value={tel_no}
                        placeholder="Tel. No"/>
                    </div>
                </div>
                {/* Gender */}
                <div className="row m-1" onChange={onChangeValue}>              {/* use function onValueChange instead */}
                    <div className="form-check form-check-inline ">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
                        <label className="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline col-lg-6">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/>
                        <label className="form-check-label" for="inlineRadio2">Female</label>
                    </div>

                </div>
                {/* Room allocation */}
                <div className="row m-1">
                    <div className="col-lg-6">
                        <input type="text" className="form-control" 
                        placeholder="Room Type"/>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" className="form-control" placeholder="Room no."/>
                    </div>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                    <Button type="submit" className="btn btn-primary btn-md">Add Guest</Button>
                </div>
            </div>
        </form>
       
    );
}
export default AddGuest;