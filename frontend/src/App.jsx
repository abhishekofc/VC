import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import AllCourses from "./pages/Courses";
import CourseInfo from "./pages/CourseInfo";

import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import UserDashboard from "./pages/dashboard/user/dashboard";
import UserProfile from "./pages/dashboard/user/pages/profile";
import UpdateUserProfile from "./pages/dashboard/user/pages/updateProfile";
import UserCourses from "./pages/dashboard/user/pages/myCourses";
import EducatorDashboard from "./pages/dashboard/educator/dashboard";
import EducatorProfile from "./pages/dashboard/educator/pages/profile";
import UpdateEducatorProfile from "./pages/dashboard/educator/pages/updateProfile";
import EducatorCourses from "./pages/dashboard/educator/pages/myCourses";
import ManageEducatorLectures from "./pages/dashboard/educator/pages/courses/lectures/lectures";
import EducatorCourseInfo from "./pages/dashboard/educator/pages/courses/Info";
import EducatorCourseCreate from "./pages/dashboard/educator/pages/courses/create";
import EducatorCourseEdit from "./pages/dashboard/educator/pages/courses/edit";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/courses" element={<AllCourses />}></Route>
          <Route path="/courses/:courseId" element={<CourseInfo />}></Route>

          <Route path="/auth">
            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<Signup />}></Route>
          </Route>
          <Route path="/dashboard">
            <Route path="user" element={<UserDashboard />}>
              <Route path="profile" element={<UserProfile />}></Route>
              <Route
                path="updateProfile"
                element={<UpdateUserProfile />}
              ></Route>
              <Route path="myCourses" element={<UserCourses />}></Route>
            </Route>
            <Route
              path="educator"
              element={<EducatorDashboard></EducatorDashboard>}
            >
              <Route path="profile" element={<EducatorProfile />}></Route>
              <Route
                path="updateProfile"
                element={<UpdateEducatorProfile />}
              ></Route>
              <Route path="myCourses" element={<EducatorCourses />}>
                <Route
                  path="info"
                  element={<EducatorCourseInfo></EducatorCourseInfo>}
                >
                  <Route
                    path="lectures"
                    element={<ManageEducatorLectures />}
                  ></Route>
                </Route>
                <Route path="create" element={<EducatorCourseCreate />}></Route>
                <Route
                  path="edit/:courseId"
                  element={<EducatorCourseEdit />}
                ></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
