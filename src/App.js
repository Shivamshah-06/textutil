

import React , { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');

const [alert, setAlert] = useState(null);

const showAlert = (message,type)=>{
setAlert({
  msg: message,
  type: type
})
setTimeout (()=>{
  setAlert(null);
}, 1500);

}
const changeMode = ( colour ) => {
 document.body.style.backgroundColor = colour
  
}
const toggleMode = () => { 
  if(mode === 'light'){
 setMode ('dark');
 changeMode('#10477e')
    showAlert("New mode has been enabled!!!!", "success");
    document.title= "textUtil-dark"  
  }
  else{
  setMode ('light');
  document.body.style.backgroundColor = 'white'
  showAlert("Light mode has been enabled!!!!", "success");

  }
}
  return (
  <>
   <Router>
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode} /> 
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About/>}>
            
            
          </Route>
          
          <Route exact path="/home" element= {<Textform showAlert={showAlert} heading="Enter your text here" mode={mode} changeMode={changeMode}/>}>
           
            
          </Route>
        </Routes>
        </div>
        </Router>
{/* <About/> */}
   

 </>
  );
}

export default App;
   