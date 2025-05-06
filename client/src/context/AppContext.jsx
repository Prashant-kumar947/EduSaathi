import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import  humanizeDuration  from "humanize-duration";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const navigate = useNavigate();

  const [isEducator, setIsEducator] = useState(true);

  // fetch all course
  const [allCourses, setAllCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const getAllCourses = () => {
    setAllCourses(dummyCourses);
  };

  // function to  calculate average rating of the course

  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  // function to calculate Course Chapter Time
  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };
  // function to calculate Course Duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  //function to calculate to no of lectures in the course
  const calculateNoOfLectures =(course)=>{
    let totalLectures=0;
    course.courseContent.forEach(chapter=>{
      if(Array.isArray(chapter.chapterContent)){totalLectures+= chapter.chapterContent.length}
    });
    return totalLectures
  }

  // function to fetch enrolled courses
  const fetchUserEnrolledCourses =()=>{
    setEnrolledCourses(dummyCourses)
  }

  useEffect(() => {
    getAllCourses(),
    fetchUserEnrolledCourses()
  }, []);

  const value = {
    allCourses,
    navigate,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    fetchUserEnrolledCourses,
    enrolledCourses,
    isEducator,
    setIsEducator,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
