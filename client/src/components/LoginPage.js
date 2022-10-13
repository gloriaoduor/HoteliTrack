// import '../App.css';
import { Link } from 'react-router-dom';


function LoginPage (){
    
    
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-60">
                    <div className="col-md-6 col-lg-6 col-xl-5 mt-4">
                    <img alt="icon" src="https://cdn-icons-png.flaticon.com/512/58/58291.png" className="img-fluid"/>
                    </div> 
                    <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
                        <form className="login-form">
                            <div className="d-flex align-items-center my-4">
                                <h1 className="text-center fw-normal mb-0 me-3">Log In</h1>
                            </div>
                           
                            {/* <!-- Email input --> */}
                             <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input type="email" id="form3Example3" className="form-control form-control-md"
                                placeholder="Enter a valid email address" />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id="form3Example4" className="form-control form-control-md"
                                placeholder="Enter password" />
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <Link to="/" type="button" className="btn btn-primary btn-md">Login</Link>
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

  