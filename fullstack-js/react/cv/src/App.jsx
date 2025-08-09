import { General } from './components/General.jsx';
import { Education } from './components/Education.jsx';
import { Practical } from './components/Practical.jsx';
import { Resume } from './components/Resume.jsx';
import './styles/App.css'

function App() {
  return (
    <>
      <form>
        <General />
        <Education />
        <Practical />
      </form>
      <Resume  />
    </>
  )
}

export default App;