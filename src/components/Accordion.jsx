import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What courses do you offer?',
      answer: 'We offer a variety of courses ranging from software development to data science, cybersecurity, and more.'
    },
    {
      question: 'Are the courses suitable for beginners?',
      answer: 'Yes, our courses are designed to cater to both beginners and experienced professionals.'
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'You can easily enroll through our website by selecting your desired course and following the registration process.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Why choose us?</h2>
      {questions.map((item, index) => (
        <div key={index} className="mb-4 border-b-2 border-gray-200">
          <button
            className="w-full flex justify-between items-center py-4 text-left text-xl text-gray-700 hover:text-indigo-500 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            {activeIndex === index ? <FaMinus /> : <FaPlus />}
          </button>
          {activeIndex === index && (
            <div className="mt-2 text-gray-600">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
