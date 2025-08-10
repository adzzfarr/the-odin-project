import { General } from './components/General.jsx';
import { Education } from './components/Education.jsx';
import { Practical } from './components/Practical.jsx';
import { Resume } from './components/Resume.jsx';
import { useState } from 'react';
import './styles/Form.css'
import './styles/App.css'

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

  const [practicalInfo, setPracticalInfo] = useState({
    'company': '',
    'position': '',
    'description': '',
    'job_start_date': '',
    'job_end_date': '',
  });

  const handlePracticalInfoChange = (field, value) => {
    setPracticalInfo((prev) => ({...prev, [field]: value}));
  }

  return (
    <>
      <form>
        <General generalInfo={generalInfo} onGeneralInfoChange={handleGeneralInfoChange} />
        <Education educationInfo={educationInfo} onEducationInfoChange={handleEducationInfoChange} />
        <Practical practicalInfo={practicalInfo} onPracticalInfoChange={handlePracticalInfoChange} />
      </form>
      <div className='resume-container'>
        <Resume generalInfo={generalInfo} educationInfo={educationInfo} practicalInfo={practicalInfo}/>
      </div>
    </>
  )
}

export default App;