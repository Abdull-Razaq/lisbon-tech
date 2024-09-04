import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import courses from '../courses.json'

const CoursePage = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        // Find the course from the JSON data based on the ID from the URL
        const foundCourse = courses.find(course => course.id === id);
        setCourse(foundCourse);
    }, [id]);

    const handleEnroll = () => {
        // Display the success message
        setShowSuccess(true);

        // Hide the success message after 3 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };


    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <div className="bg-white rounded-xl shadow-md p-6">
                <h1 className="text-3xl font-bold text-indigo-500 mb-4">{course.title}</h1>

                <div className="mb-6">
                    <div className="text-gray-600 mb-2">{course.type}</div>
                    <p className="text-lg text-gray-700 mb-4">{course.description}</p>
                    <p className="text-lg text-gray-700 mb-4"><strong>Instructor:</strong> {course.instructor.name}</p>
                    <p className="text-lg text-gray-700 mb-4"><strong>Price:</strong> {course.price}</p>
                </div>

                <div className="border border-gray-200 mb-6"></div>

                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="text-orange-700 mb-3 flex items-center">
                        <FaMapMarkerAlt className='inline mr-2 text-lg' />
                        {course.location}
                    </div>
                    {/* Enroll Now Button */}
                    <button
                        onClick={handleEnroll}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Enroll Now
                    </button>

                    {/* Success Message */}
                    {showSuccess && (
                        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
                            Successful enrollment to course!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoursePage;
