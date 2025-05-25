import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import StudentView from './component/student/StudentView';
import Home from './Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/common/navBar";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentProfile from "./component/student/StudentProfile";

function App() {
  return (
    <main className="App">
      
      
      <Router>
         <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/view-students" element={<StudentView/>}/>
          <Route exact path="/add-students" element={<AddStudent/>}/>
          <Route exact path="/edit-student/:id" element={<EditStudent/>}/>
          <Route exact path="/student-profile/:id" element={<StudentProfile/>}/>
        
        </Routes>
      </Router>
    </main>
  );
}

export default App;
