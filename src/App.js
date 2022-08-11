
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

import React, { useState } from 'react'
import Alert from './components/Alert'


function App() {

  const [mode,setmode] =useState('light');
  const [alert, setAlert] = useState(null)

  const showalert = (message,type)=>{
       setAlert ({
        msg: message,
        type:type
       })

       setTimeout(() => {
        setAlert(null)
       }, 1000);
  }

  const toggle =()=>{
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor ='black';
      showalert("Dark mode enabled","success");
    }else{
      setmode('light');
      document.body.style.backgroundColor ='white';
      showalert("Light mode enabled","success");
    }
  }


  return (
  <>

  <Navbar title ="Textutils" mode={mode} toggle={toggle}/>
  <Alert alert={alert} />
  <div className="container my-3"> 
  <TextArea heading="Enter text to analyze" mode={mode} showalert={showalert} /></div>
  </>
  );
}

export default App;
