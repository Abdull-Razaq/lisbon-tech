import { useLocation } from 'react-router-dom';
import courses from '../courses.json'
import CourseListing from './CourseListing'

const CourseListings = () => {

    const location = useLocation(); // Get the current location
    const isHomePage = location.pathname === '/'; 

    const recentCourses = isHomePage ? courses.slice(0, 3) : courses;


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHomePage ? 'Recent Courses' : 'All Courses'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentCourses.map((course) => (
            <CourseListing key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseListings