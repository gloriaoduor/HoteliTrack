// import React from "react";
// // import { Link } from 'react-router-dom';
// // import { useState } from "react";


// function AddGuest(){
//     // const [formData, setFormData] = useState ({
//     //     fname:"",
//     //     sname:"",
       
//     // })
//     // id_no: "",
//     // nationality:"",
//     // gender:"",
//     // email:"",
//     // tel_no:"",

//     // function onChangeValue(e){
        
//     //     setFormData({[e.target.gender]: e.target.value})
//     //     console.log(formData.gender)
//     // }
//     // const handleChange = (event) => {
//     //     setFormData({ ...formData, [event.target.name]: event.target.value });
//     //   };

//     // function handleSubmit(e){
//     //     e.preventDefault();
//     //     console.log("adding guest...")

//     //     fetch("/guests",
//     //     {
//     //         method: "POST",
//     //         headers: {
//     //           "Content-Type": "application/json",
//     //         },
//     //         body: JSON.stringify({ formData }),
//     //     })
//     //     .then((res) => res.json())
//     //     .then((data) => console.log(data));
//     // }

//     return (
//         <form className="p-3 mt-3 w-100 bg-light" >
//             {/* onSubmit={handleSubmit} */}
            
                  
//             <div className="col-md-12">

//                   {/* first and last names */}
//                 <div className="row m-1">
//                     <div className="col-lg-6">
//                         <input type="text"
//                          className="form-control form-control-md"
//                          name="fname"
//                         //  onChange={handleChange}
//                         //  value={formData.fname} 
//                          placeholder="First Name" />
//                     </div>
//                     <div className="col-lg-6">
//                         <input type="text" 
//                         className="form-control form-control-md" 
//                         // onChange={handleChange}
//                         name="sname"
//                         // value={formData.sname}
//                         placeholder="Last Name" />
//                     </div>
//                 </div>
            
//                 {/*  Nationality and Id number*/}
//                 {/* <div className="row m-1">
//                     <div className="col-lg-6">
//                         <input type="text" className="form-control" onChange={handleChange}
//                         value={formData.nationality}
//                         name="nationality"
//                         placeholder="Nationality"/>
//                     </div>
//                     <div className="col-lg-6">
//                         <input type="text" className="form-control" onChange={handleChange}
//                         value={formData.id_no}
//                         name="id_no"
//                         placeholder="ID no."/>
//                     </div>
//                 </div> */}
//                     {/* Contacts */}
//                 {/* <div className="row m-1">
//                     <div className="col-lg-6">
//                         <input type="text" className="form-control" onChange={handleChange}
//                         value={formData.email}
//                         name="email"
//                         placeholder="Email"/>
//                     </div>
//                     <div className="col-lg-6">
//                         <input type="text" className="form-control" onChange={handleChange}
//                         value={formData.tel_no}
//                         name="tel_no"
//                         placeholder="Tel. No"/>
//                     </div> */}
//                 {/* </div> */}
//                     {/* Gender */}
//                 {/* <div className="row m-1" onChange={onChangeValue}>            
//                     <div className="form-check form-check-inline ">
//                         <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
//                         <label className="form-check-label" for="inlineRadio1">Male</label>
//                     </div>
//                     <div className="form-check form-check-inline col-lg-6">
//                         <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/>
//                         <label className="form-check-label" for="inlineRadio2">Female</label>
//                     </div> */}

//                 {/* </div> */}
//                     {/* Room allocation */}
//                 {/* <div className="row m-1">
//                     <div className="col-lg-6">
//                         <input type="text" className="form-control" 
//                         placeholder="Room Type"/>
//                     </div>
//                     <div className="col-lg-6">
//                         <input type="text" className="form-control" placeholder="Room no."/>
//                     </div>
//                 </div> */}
//                 <div className="text-center text-lg-start mt-4 pt-2">
//                     <input type="submit" className="btn btn-primary btn-md">Add Guest</input>
//                 </div>
//             </div>
//         </form>
       
//     );
// }
// export default AddGuest;

import React from "react";
import { useState } from "react";

function AddGuest(){

    return (
        <form className=" mt-4 mx-4 bg-light p-4 h-custom row d-flex">
        <div><div className="mb-1">
            <label htmlFor="fname" className="form-label">First Name</label>
            <div className="input-group mb-1">
                <input type="name" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
        </div>
        <div className="mb-1">
            <label htmlFor="sname" className="form-label">Last Name</label>
            <div className="input-group mb-1">
                <input type="name" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
        </div>
        <div className="mb-1">
            <label htmlFor="exampleInputEmail1" className="form-label">ID No.</label>
            <div className="input-group mb-1">
                <input type="name" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
        </div>
        <div className="mb-1">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-group mb-1">
                <input type="name" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
        </div>
        <div className="mb-1">
            <label htmlFor="nationality" className="form-label">Nationality</label>
            <div className="input-group mb-1">
                <input type="name" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>
        </div>
        <hr/>
        <button type="submit" className="btn btn-default btn-primary">Submit</button>
    </div></form>
    );
}

export default AddGuest;