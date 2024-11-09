import React from 'react';
import { assets } from '../assets/assets';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Hero() {
  const [text] = useTypewriter({
    words: [
      'Building bridges between technology & creativity..',
      'Exploring the future of electronics...',
      'Talent is cheaper than salt!',
      "That's why lots of hard work is needed",
    ],
    loop: 0, // Set to 0 to loop indefinitely
    delay: 2000, // Delay before typing the next word
    typeSpeed: 100, // Speed of typing
    deleteSpeed: 100, // Speed of backspacing
  });

  return (
    <div className='min-h-[100vh] flex flex-col  items-center  text-white pt-10 mt-5'>
      <div className='flex flex-col items-start sm:p-3  my-4 shadow-sm shadow-cyan-500/20 rounded-lg bg-[#121212] pt-3'>
        <h1 className='text-3xl font-semibold mb-4 pl-3 sm:pl-0'>Prabhanjan Satish Dhobale</h1>
        <div className='flex flex-col-reverse md:flex-row p-3 md:p-0'>
          <div>
            <p className='text-slate-50/70 my-4'>
              I’m Prabhanjan Satish Dhobale, a dedicated Electronics and Telecommunication Engineering student from the class of 2025 and the <span className='text-yellow-500'>{"Chairman".toUpperCase()}</span> of the IETE Student Forum (ISF) at SKNCOE, Pune. With a passion for both software and hardware, I've navigated the complexities of the MERN stack and mastered React Native through Expo. My journey is fueled by curiosity and a drive to push the boundaries of what's possible.
            </p>
            <div className='w-full h-20'>
              <span className='font-bold text-2xl text-cyan-500/40'>{text}</span>
              <Cursor />
            </div>
            <div>
              <h1 className='my-4 text-lg font-semibold'>What I Exactly Know:</h1>
              <div className="flex flex-wrap items-start gap-5 text-sm">
                {['MERN Stack', 'React Native (EXPO)', 'API Binding', 'Leadership', 'CORE Expert'].map((skill, index) => (
                  <p key={index} className='key border-slate-50/20 rounded-md border p-2 text-center animated-div transition-transform duration-200 hover:scale-105'>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <img src={assets.my_pic} className='w-full sm:w-[350px] rounded-lg shadow-md' alt="Prabhanjan Satish Dhobale" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
