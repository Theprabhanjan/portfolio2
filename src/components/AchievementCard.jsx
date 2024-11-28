import React from 'react';

const AchievementCard = ({ title, description, date }) => {
    return (
        <div role='achievements' className=" w-full  shadow-slate-50/10 shadow-sm  rounded-lg p-4 mt-2  transition-shadow duration-300 ease-in-out transform ">
            <div className="flex items-center mb-4">
                {/* Icon */}
             
                {/* Title and Date */}
                <div>
                    <h3 className="text-xl  text-center ">{title}</h3>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>
            </div>
            {/* Description */}
            <p className="text-slate-300/70 mb-4">
                {description}
            </p>
            <div className="flex justify-end">
                {/* Button or link */}
                <button className="text-blue-500 font-medium hover:text-blue-700">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default AchievementCard;
