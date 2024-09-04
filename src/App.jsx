import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import MainLayout from './pages/MainLayout'
import StudentLog from './pages/StudentLog'
import About from './pages/About'
import CoursesPage from './pages/CoursesPage'
import CoursePage from './pages/CoursePage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <MainLayout />} >
    <Route index element={ <HomePage />} />
    <Route path='/courses' element={ <CoursesPage />} />
    <Route path='/login' element={ <StudentLog />} />
    <Route path='/about' element={ <About />} />
    <Route path="/course/:id" element={ <CoursePage />} />

    </Route>
  )
)


const App = () => {

  return (
    <>
        <RouterProvider router={router} />;
    </>
  )
}

export default App