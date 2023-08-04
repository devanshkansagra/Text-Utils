import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [alert, setalert] = useState(null);

  function showAlert(message, type) {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  } 
  return (
    <>
      <Navbar title="Text-Utils" showAlert={showAlert}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
