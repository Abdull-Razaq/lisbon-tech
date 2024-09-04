import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Profile from './Profile'
import ProfileDropdown from './ProfileDropDown'

const Navbar = () => {

    const [showProfile, setShowProfile] = useState(false); // State to control the Profile component

    const handleStudentLogin = () => {
        setShowProfile(true); // Show the Profile component when "Student Login" is clicked
    };


    return (
        <nav className="bg-gray-700 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                    >
                        {/* <!-- Logo --> */}
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img
                                className="h-12 w-auto"
                                src={logo}
                                alt="React School"
                            />
                            <span className="hidden md:block text-white text-3xl font-bold ml-4"
                            >Lisbon Tech Institution</span
                            >
                        </NavLink>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink
                                    to="/"
                                    className={({isActive})=> isActive ?"text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"}
                                    >
                                Home
                                </NavLink>
                                 <NavLink
                                    to="/courses"
                                    className={({isActive})=> isActive ?"text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"}
                                    >
                                    Courses
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({isActive})=> isActive ?"text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"}
                                    >
                                    About Us
                                </NavLink>

                                <NavLink
                                    to="login"
                                    onClick={handleStudentLogin} // Trigger the Profile component on click
                                    className={({isActive})=> isActive ?"text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"}
                                >
                                    Student Login
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar