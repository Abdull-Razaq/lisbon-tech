import React from 'react';

const Notification = ({ message, show, onClose }) => {
    if (!show) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md shadow-lg">
            <div className="flex justify-between items-center">
                <span>{message}</span>
                <button onClick={onClose} className="text-green-600 hover:text-green-800">
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Notification;
