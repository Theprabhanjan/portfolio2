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
    <div className='min-h-[100vh] flex flex-col  items-center  text-white pt-10 mt-5 animate-slideUp'>
      <div className='flex flex-col items-start sm:p-3  my-4 shadow-sm shadow-cyan-500/20 rounded-lg bg-[#121212] pt-3'>
        <h1 className='text-3xl font-semibold mb-4 pl-3 sm:pl-0'>Prabhanjan Satish Dhobale</h1>
        <h3><b>Chairman</b>, IETE Student Forum, SKNCOE</h3>
        <div className='flex flex-col-reverse md:flex-row p-3 md:p-0'>
          <div>
            <p className='text-slate-50/70 my-4'>
            Innovative and results-driven Electronics and Telecommunication Engineer (Batch 2025) with expertise in core electronics and full-stack development. Proficient in
             designing and implementing hardware and software solutions, including advanced system design and cross-platform applications. Experienced in leading and collaborating on diverse projects, such as self-balancing e-bikes, faculty feedback systems, and full-stack web applications. Passionate about leveraging interdisciplinary knowledge to drive innovation and solve complex engineering challenges. GATE 2024 qualified and an active leader as Chairman of the IETE Student Forum.
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
          <div className='rounded-full animate-bounceCustom flex items-center justify-center h-full w-full shadow-lg shadow-cyan-700 p-1 border-cyan-600 border '>

          <img src={assets.my_pic} className='rounded-full w-full h-full' alt="Prabhanjan Satish Dhobale" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
