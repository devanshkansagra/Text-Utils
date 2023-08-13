import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom'

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
      <Navbar title="Text-Utils" showAlert={showAlert} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        {/* <TextForm heading="Enter the text to analyze" showAlert={showAlert}/>
        <About /> */}
      </div>
    </>
  );
}

export default App;
