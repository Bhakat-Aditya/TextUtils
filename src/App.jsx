import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Accordian from './components/Accordian'
import Alert from './components/Alert'
import {
  HashRouter as Router,  // ✅ Changed from BrowserRouter to HashRouter
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
      document.title = ("TextUtils - Light Mode");
      setTimeout(() => {
        document.title = ("TextUtils");
      }, 750);
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      document.title = ("TextUtils - Dark Mode");
      setTimeout(() => {
        document.title = ("TextUtils");
      }, 750);
    }
  }

  return (
    <div>
      <Router>
        <Navbar title="Text Utils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={
              <TextForm heading="Enter Your Text" mode={Mode} showAlert={showAlert} />
            } />
            <Route exact path="/features" element={
              <Accordian title="Our Features" mode={Mode} />
            } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
