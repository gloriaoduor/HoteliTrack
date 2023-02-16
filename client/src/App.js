import './App.css';


function App() {
  return (
    <div className=''>
      <div className='App container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <div className='landing'>
              <img className='img' alt="logo" src="https://cdn-icons-png.flaticon.com/512/58/58291.png" />
              <h1 className='Header pt-2 font-italic'>HOTELiTRACK </h1> 
             
            </div>
          </div>
          <div className='infocol col-6 '>
            <p className='info'>Join us today for: <br />
              <ul>
                <li>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</li>
                <li>Duis pellentesque pretium odio,nec varius dolor pharetra ut.</li>
                <li>Phasellus molestie risus enim</li>
                <li>Praesent bibendum ante ac neque sodales</li>
              </ul>
            </p>
            <button className='button btn  rounded mb-4'>Get Started...</button>
          </div>
        </div>

      </div>
    </div>
  
   
  );
}

export default App;
