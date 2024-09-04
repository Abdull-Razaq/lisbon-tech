import React from 'react';
import { Link } from 'react-router-dom'; 

const AboutDesc = () => {
  // const descriptionText = `At our tech school, we are committed to empowering individuals with the knowledge and skills required to thrive in the ever-evolving world of technology. Whether you're a beginner eager to start your journey or a seasoned professional looking to expand your expertise, we have something for everyone.

  // Our courses are designed to be hands-on, practical, and relevant to the current tech landscape. From software development to data science, cybersecurity, artificial intelligence, and beyond, our curriculum covers a wide range of disciplines to ensure you are well-equipped to tackle the challenges of the modern tech industry.

  // We believe that the path to becoming a techie is unique for everyone. That's why we offer a diverse selection of courses tailored to different skill levels and career goals. Our experienced instructors bring real-world experience into the classroom, providing you with insights and guidance to help you succeed.

  // Join us on your journey to mastering the skills that will define the future. Explore our courses, connect with our vibrant community of learners, and take the next step towards achieving your career aspirations.`;

  // const previewText = descriptionText.substring(0, 200) + '...';

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-lg text-gray-700 space-y-6">
       
          <>
            <p>
              At our tech school, we are committed to empowering individuals with the knowledge and skills required to thrive in the ever-evolving world of technology. Whether you're a beginner eager to start your journey or a seasoned professional looking to expand your expertise, we have something for everyone.
            </p>
            <p>
              Our courses are designed to be hands-on, practical, and relevant to the current tech landscape. From software development to data science, cybersecurity, artificial intelligence, and beyond, our curriculum covers a wide range of disciplines to ensure you are well-equipped to tackle the challenges of the modern tech industry.
            </p>
            <p>
              We believe that the path to becoming a techie is unique for everyone. That's why we offer a diverse selection of courses tailored to different skill levels and career goals. Our experienced instructors bring real-world experience into the classroom, providing you with insights and guidance to help you succeed.
            </p>
            <p>
              Join us on your journey to mastering the skills that will define the future. Explore our courses, connect with our vibrant community of learners, and take the next step towards achieving your career aspirations.
            </p>
          </>
        
      </div>
    </div>
  );
};

export default AboutDesc;
