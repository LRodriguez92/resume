import logo from './logo.svg';
import './App.css';
import EducationContainer from './components/EducationContainer';
import ExperienceContainer from './components/ExperienceContainer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <EducationContainer />
      <ExperienceContainer />
    </div>
  );
}

export default App;
