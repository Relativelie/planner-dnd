import './stylesheets/css/App.css';
import { ProjectName } from './components/Projectname';
import { CreateLists } from './components/Createlists';

function App() {
  return (
    <div className="App">
      <div className='plannerHeaderContainer'>
        <div className="plannerHeader">
          <h1>Your Planner</h1>
          <ProjectName />
        </div>
      </div>

      <CreateLists />
    </div>
  );
}

export default App;
