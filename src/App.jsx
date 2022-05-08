import './App.css';
import  'react-bootstrap'
// import { FeedBackForm } from './pages/feedBackForm';
// import { FacultyLogin } from './components/SignUPIN/facultyLogin'
// import { GenerateCOFeedback } from './components/generateCOFeedback'
// import {DynDropDown} from './components/DynTabs/dynDropDown'
// import {StudentLogInPage} from './pages/studentLogInPage'
import { FacultyDashboard } from './pages/facultyDashboard';
// import {StudentLogInPage} from './pages/studentLogInPage'
function App() { 
  return (
    <>
      <FacultyDashboard/>
      {/* <StudentLogInPage/> */}
    </>

  );
}
export default App;
