import React from 'react'
import Title from '../components/Title'
import Accord from '../components/Accord'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Project() {
  const [text] = useTypewriter({
    words: [
      'Repairs almost every things',
      'Paper-pen is my first preferance',
      "I'm a creative problem solver",

    ],
    loop: 0, // Set to 0 to loop indefinitely
    delay: 2000, // Delay before typing the next word
    typeSpeed: 100, // Speed of typing
    deleteSpeed: 100, // Speed of backspacing
  });

  return (
    <div role='Projects' className='min-h-[80vh] animate-slideUp ' >
      {/* Top heading */}
      <div className='text-[5vh]  '>
        <Title text1={"projects".toUpperCase()} />
      </div>
      <div className='w-full h-20 mt-4'>
        <span className='text-2xl  font-extrabold handWritten-font text-yellow-300'>{text}</span>
        <Cursor />
      </div>

      <div className='flex flex-col gap-5 sm:flex-row min-h-[40vh] justify-between     '>
        {/* left */}
        <div className='shadow-slate-50/20  shadow flex flex-col  gap-5 rounded-2xl h-full overflow-hidden'>
          <p className='shadow-slate-50/20 bg-slate-500/20 shadow border-inherit p-3 pl-7 text-amber-700/70 font-semibold  text-lg '>MERN Projects</p>
          <div className='p-5 pt-1 sm:min-h-[40vh]'>
            <Accord title={'Docz_app'} description={"Simple frontend project which showcase about the framer-motion with React librabry and a simple app for online note writing "} link={'https://github.com/Theprabhanjan/Docz_app'} />
            <Accord title={'Rejouce.com Clone'} link={'https://github.com/Theprabhanjan/Rejoiuce'} description={"Fronend clone which reflecates the special effects like mouse follower, image-hover effect,etc"} />
            <Accord title={'Two-good.com Clone'} link={'https://github.com/Theprabhanjan/Two-good'} description={"Fronend clone that explores scrolltrigger and many core JS functionality"} />
            <Accord title={'Bubble game'} link={'https://github.com/Theprabhanjan/bubble-game'} description={"Pure JS implemented game !"} />
            <Accord title={'Complete spotify clone with functionality'} description={"A project which is developed with industry standards having frontend as well as backend"} />
            <Accord title={'An LinkUP ERP'} link={'https://github.com/Theprabhanjan/LinkUP'} description={"Disclosing soon ! A high-end project which will capable to server 1,00,000/min users simultaneuosly"} />
            <Accord title={'Airbnb clone'} link={'https://github.com/Theprabhanjan/airbnb'} description={"complete clone and servering pages from server sides through 'views'"} />
            <Accord title={'Working on startup'} link={'https://github.com/Theprabhanjan/'} description={"Trying a different approach"} />
          </div>
        </div>

        {/* middle */}
        <div className='flex flex-col rounded-2xl gap-5 backdrop-blur-md  shadow-slate-50/20 shadow-sm overflow-hidden '>
          <p className='shadow-slate-50/20 bg-slate-500/20 shadow border-inherit p-3 pl-7 text-teal-600/60 font-semibold text-lg  ' >Expo Projects</p>
          <div className='p-5 pt-1 sm:min-h-[40vh]'>
            <Accord title={'LinkUP'} link={'https://github.com/Theprabhanjan/LinkP'} description={'Web supporting app for both IOS & Android'} />
            <Accord title={'Unknown Contact'} link={'https://github.com/Theprabhanjan/unknownContact'} description={'WhatsApp  API based app which allows our ERP communicate with users'} />

          </div>
        </div>

        {/* core project */}
        <div className='flex flex-col  rounded-2xl gap-5 backdrop-blur-md   shadow-slate-50/30 shadow-sm overflow-hidden '>
          <p className='shadow-slate-50/20 bg-slate-500/20 shadow border-inherit p-3 pl-7 text-purple-700/50 font-bold ' >Core Projects</p>
          <div className='p-5 pt-1  pb-40 gap-20 sm:min-h-[40vh] items-center flex flex-col '>
            <Accord title={'Design & development of ebike'} link={'https://github.com/Theprabhanjan/designofebike'} description={'Completely refabricated from recyclable parts sourced from scrap Electronic innovation: Designed an e-bike with an entirely new battery pack, incorporating small changes in the Battery Management System (BMS).'} />
            <a className='text-blue-500 hover:text-blue-700 transition ease-in duration-150' target='_blank' href="https://youtu.be/fP_TveaLIKM">Watch video</a>
            {/* <div> */}
            <iframe src="https://www.youtube.com/embed/6ZVvHHc5vvw?si=HevOu04yCZH5ukJW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* </div> */}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Project