import { General } from './components/General.jsx';
import { Education } from './components/Education.jsx';
import { Practical } from './components/Practical.jsx';
import { Resume } from './components/Resume.jsx';
import './styles/App.css'
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    number: '',
  });

  const handleGeneralInfoChange = (field, value) => {
    setGeneralInfo(prev => ({...prev, [field]: value}));
  } 

  return (
    <>
      <form>
        <General generalInfo={generalInfo} onGeneralInfoChange={handleGeneralInfoChange} />
        <Education />
        <Practical />
      </form>
      <Resume generalInfo={generalInfo} />
    </>
  )
}

export default App;