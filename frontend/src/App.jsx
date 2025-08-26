import { Routes, Route } from "react-router-dom";
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
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/courses/:courseId" element={<CourseInfo />} />

      {/* Auth Pages */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />

      {/* User Dashboard */}
      <Route path="/dashboard/user" element={<UserDashboard />}>
        <Route path="profile" element={<UserProfile />} />
        <Route path="updateProfile" element={<UpdateUserProfile />} />
        <Route path="myCourses" element={<UserCourses />} />
      </Route>

      {/* Educator Dashboard */}
      <Route path="/dashboard/educator" element={<EducatorDashboard />}>
        <Route path="profile" element={<EducatorProfile />} />
        <Route path="updateProfile" element={<UpdateEducatorProfile />} />
        <Route path="myCourses" element={<EducatorCourses />}>
          <Route path="info" element={<EducatorCourseInfo />}>
            <Route path="lectures" element={<ManageEducatorLectures />} />
          </Route>
          <Route path="create" element={<EducatorCourseCreate />} />
          <Route path="edit/:courseId" element={<EducatorCourseEdit />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
