import './App.css';
import { Link } from 'react-router-dom';



function App() {

  // const navigate = useNavigate();

  return (
    <div className=''>
      <div className='App container-fluid'>
        <div className='row app-row'>
          <div className='col-sm-6 text-center'>
            <div className='landing'>
              <img className='img mx-auto' alt="logo" src="https://cdn-icons-png.flaticon.com/512/58/58291.png" />
              <h1 className='Header pt-2 font-italic'>HOTELiTRACK </h1> 
             
            </div>
          </div>
          <div className='infocol col-sm-6 col-md-6'>
            <p className='info'>Join us today for: <br />
              <ul>
                <li>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</li>
                <li>Duis pellentesque pretium odio,nec varius dolor pharetra ut.</li>
                <li>Phasellus molestie risus enim</li>
                <li>Praesent bibendum ante ac neque sodales</li>
              </ul>
            </p>
            <Link to="/sign-up"><button className='button btn  rounded mb-4'
            >
              Get Started...</button></Link>
          </div>
        </div>

      </div>
    </div>
  
   
  );
}

export default App;
