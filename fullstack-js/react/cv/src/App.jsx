import { General } from './components/General.jsx';
import { Education } from './components/Education.jsx';
import { Practical } from './components/Practical.jsx';
import { Resume } from './components/Resume.jsx';
import './styles/App.css'
import { useState } from 'react';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    'name': '',
    'email': '',
    'number': '',
  });

  const handleGeneralInfoChange = (field, value) => {
    setGeneralInfo((prev) => ({...prev, [field]: value}));
  } 

  const [educationInfo, setEducationInfo] = useState({
    'school': '',
    'qualification': '',
    'school_start_date': '',
    'school_end_date': '',
  });

  const handleEducationInfoChange = (field, value) => {
    setEducationInfo((prev) => ({...prev, [field]: value}));
  }

  return (
    <>
      <form>
        <General generalInfo={generalInfo} onGeneralInfoChange={handleGeneralInfoChange} />
        <Education educationInfo={educationInfo} onEducationInfoChange={handleEducationInfoChange} />
        <Practical />
      </form>
      <Resume generalInfo={generalInfo} educationInfo={educationInfo} />
    </>
  )
}

export default App;