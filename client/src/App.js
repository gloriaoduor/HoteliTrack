import './App.css';
import LoginPage from './components/LoginPage'; 
import SignUpPage from './components/SignUpPage';
// import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AddGuest from './components/AddGuest';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage/>} />
        <Route exact path='/sign-up' element={<SignUpPage/>} />
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/new-guest' element={<AddGuest/>}/>
      </Routes>  
    </Router>
   
  );
}

export default App;
