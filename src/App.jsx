

import { useState } from 'react'
import './App.css'
import InstaLogo from './components/InstaLogo.jsx'
import ButtonIn from './components/button.jsx';
import UserForm from './components/Form.jsx';

function App() {
  const [isSignUp, setIsSignUp] = useState(false)

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    
    <div id='FormBox'>
      <InstaLogo />
      
      <UserForm isSignUp={isSignUp}/>

      <ButtonIn onClick={toggleAuthMode} isSignUp={isSignUp} />
    </div>
  )
}

export default App
