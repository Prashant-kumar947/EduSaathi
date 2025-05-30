import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import CourseDetails from "./pages/student/CourseDetails";
import CourseLists from "./pages/student/CourseLists";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";
import Educator from "./pages/Instructor/Educator";
import Dashboard from "./pages/Instructor/Dashboard";
import AddCourse from "./pages/Instructor/AddCourse";
import MyCourses from "./pages/Instructor/MyCourses";
import StudentEnrolled from "./pages/Instructor/StudentEnrolled";
import Navbar from "./components/student/Navbar";
import Loading from "./components/student/Loading";
import 'react-quill/dist/quill.snow.css';

const App = () => {

const isEducatorRoute = useMatch('/educator/*')

  return (
    <div className="text-default min-h-screen bg-white">
     { !isEducatorRoute && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course-list" element={<CourseLists />} />
        <Route path="course-list/:input" element={<CourseLists />} />
        <Route path="my-enrollments" element={<MyEnrollments />} />
        <Route path="Course/:id" element={<CourseDetails />} />
        <Route path="player/:courseId" element={<Player />} />
        <Route path="loading/:path" element={<Loading/>} />
        <Route path="educator" element={<Educator />}>
          <Route path="/educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
