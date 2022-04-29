import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#3A3845';
      showAlert("dark mode has been enable","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable", "success");
    }
  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Form heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
