import { BrowserRouter, Routes, Route} from "react-router-dom";
import StudentRegister from "./pages/auth/StudentRegister";
import StudentLogin from "./pages/auth/StudentLogin";
import HomePage1 from "./pages/HomePage1";
import HomePage2 from "./pages/HomePage2";
import NoteBook from "./pages/student/NoteBook";
import MyProfile from "./pages/student/MyProfile";
import PersonalInformation from "./pages/student/PersonalInformation";
import Companies from "./pages/student/Companies";
import MyEducationInformation from "./pages/student/MyEducationInformation";
import MyResults from "./pages/student/MyResults";
import Student from "./pages/student/Student";
import Project from "./pages/student/Project";
import ApprovedApplication from "./pages/student/ApprovedApplication";
import AwaitedApplication from "./pages/student/AwaitedApplication";
import RejectedApplication from "./pages/student/RejectedApplication";
import MyApplication from "./pages/student/MyApplication";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage1/>} />
          <Route path="/register" element={<HomePage2/>} />
          <Route path="/student/register" element={<StudentRegister />} />
          <Route path="/student/login" element={<StudentLogin />} /> 
          <Route path="/student/myprofile"element={<MyProfile/>} />
          <Route path="/student/personalinformation"element={<PersonalInformation/>} />
          <Route path="/student/companies"element={<Companies/>} />
          <Route path="/student/notebook"element={<NoteBook/>} />
          <Route path="/student/myeducationinformation"element={<MyEducationInformation/>} />
          <Route path="/student/myresults"element={<MyResults/>} />
          <Route path ="/student/student"element={<Student/>} />
          <Route path="/student/project"element={<Project/>} />
          <Route path="/student/approvedapplication"element={<ApprovedApplication/>} />
          <Route path="/student/awaitedapplication"element={<AwaitedApplication/>}/>
          <Route path="/student/rejectedapplication"element={<RejectedApplication/>}/>
          <Route path="/student/myapplication"element={<MyApplication/>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;