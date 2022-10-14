// import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginPage (){
    
    const navigate = useNavigate();
    const [email, setEmail] = useState(" ");
    

    function handleSubmit(e){
        e.preventDefault();
        console.log("attempting to log in")

        fetch("/login",
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
        
        // .then((user) => onLogin(user))
        // what is onLogin? what is user

    }
    function navigateDashboard(){
        navigate('/dashboard')
    }
    
    
    return (
        // form onSubmit={handleSubmit}
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-60">
                    <div className="col-md-6 col-lg-6 col-xl-5 mt-4">
                    <img alt="icon" src="https://cdn-icons-png.flaticon.com/512/58/58291.png" className="img-fluid"/>
                    <h3>HoteliTrack</h3>
                    </div> 
                    <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="d-flex align-items-center my-4">
                                <h1 className="text-center fw-normal mb-0 me-3">Log In</h1>
                            </div>
                           
                            {/* <!-- Email input --> */}
                             <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input type="email" id="email" className="form-control form-control-md"
                                placeholder="Enter a valid email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id="form3Example4" className="form-control form-control-md"
                                placeholder="Enter password" />
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-md" onClick={navigateDashboard}>Login</button> 
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/sign-up"
                                className="link-danger">Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default LoginPage;

  