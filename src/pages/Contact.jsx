import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import Title from '../components/Title';

const Contact = () => {
    const phoneNumber = '9404606271';
    const whatsappLink = `https://wa.me/+91${phoneNumber}`;

    return (
        <div className="min-h-screen  text-cyan-400 flex flex-col items-center  p-8 animate-slideUp">
            {/* Page Title */}
            <div className='text-[5vh]'>

            <Title text1={"Contact"} text2={'Me'}/>
            </div>
            
            {/* Contact Details */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md text-center">
                {/* Phone */}
                <div className="flex items-center justify-center mb-4">
                    <FaPhoneAlt className="text-cyan-400 text-2xl mr-2" />
                    <a href={`tel:+91${phoneNumber}`} className="text-cyan-400 hover:underline">
                        +91 {phoneNumber}
                    </a>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center mb-4">
                    <FaEnvelope className="text-cyan-400 text-2xl mr-2" />
                    <a href="mailto:prabhanjandhobale.skn.entc@gmail.com" className="text-cyan-400 hover:underline">
                    prabhanjandhobale.skn.entc@gmail.com
                    </a>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center mb-4">
                    <FaMapMarkerAlt className="text-cyan-400 text-2xl mr-2" />
                    <p className="text-gray-300">Pune, Maharashtra, India</p>
                </div>

                {/* LinkedIn & GitHub */}
                <div className="flex justify-center space-x-6 mt-6">
                    <a href="https://linkedin.com/in/theprabhanjan" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-cyan-400 text-2xl hover:text-cyan-300" />
                    </a>
                    <a href="https://github.com/prabhanjandhobale" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-cyan-400 text-2xl hover:text-cyan-300" />
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-green-500 text-2xl hover:text-green-400" />
                    </a>
                </div>

                {/* Additional Fields */}
                <div className="text-gray-300 mt-8">
                    
                   
                    <p>Skills: <span className="text-gray-400">MERN Stack, React Native, etc.</span></p>
                    {/* Add more fields as needed */}
                </div>
            </div>
                
        </div>
    );
};

export default Contact;
