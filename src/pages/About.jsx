import React from 'react'
import Title from '../components/Title'
import AchievementCard from '../components/AchievementCard'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';


function About() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    < >

      <div className=' text-[5vh] '>
        <Title text1={"About".toUpperCase()} text2={"me".toUpperCase()} />
      </div>
      <div className='w-full relative   rounded-lg flex sm:flex-row flex-col p-5 gap-5 justify-center items-start backdrop-blur-md  '>
        {/* left side */}
        {/* <div className='absolute bg-teal-700 -z-50 px-16 py-2 rounded-t-md md:left-[20%] -top-5 sm:-top-4 '><p className='font-semibold'>Education</p></div> */}
        <div className="left flex flex-col gap-16 sm:w-[50%] w-full p-6  border border-slate-50/10 sm:min-h-[50vh] rounded-lg ">
          <div className='w-full rounded-lg relative shadow-sm hover:shadow-2xl  shadow-slate-200/30 transition-shadow duration-300 ease-in-out  '>
            <div className='absolute -top-4 left-4 bg-yellow-500/90 px-2 rounded-md  '>2021-2025</div>
            <div className='p-3 pt-5'>
              <p className='sm:text-xl'>Pursuing bachelor of EC Engineering (2025) batch </p>
              <div className='flex flex-row flex-wrap justify-between text-[10px] sm:text-sm'>
                <li><span className='text-slate-300/40 hover:text-white transition ease-in duration-150'>Current Aggrigate:</span> <span>7.71</span></li>
                <li><span className='text-slate-300/40 hover:text-white transition ease-in duration-150'>University/location:</span> <span>SPPU,Pune</span></li>
                <li><span className='text-slate-300/40 hover:text-white transition ease-in duration-150'>Year of passout:</span> <span>2025</span></li>
              </div>
            </div>
          </div>

          <div className='w-full rounded-lg relative shadow-sm hover:shadow-2xl  shadow-slate-200/30 transition-shadow duration-300 ease-in-out  '>
            <div className='absolute -top-4 left-4 bg-green-500 px-2 rounded-md  '>2019-2021</div>
            <div className='p-3 pt-5'>
              <p className='sm:text-xl'>12th Standard</p>
              <div className='flex flex-row flex-wrap sm:gap-4 justify-between text-[10px] sm:text-sm '>
                <li><span className='text-slate-300/40 hover:text-white transition ease-in duration-150'>Aggregate percentage</span> <span>97.57%</span></li>
                <li><span className='text-slate-300/40 hover:text-white transition ease-in duration-150'>Board/location:</span> <span>MSBSHSE (Pandharpur)</span></li>
                <li><span className='text-slate-300/40 hover:text-white transition ease-in duration-150'>Year of passout:</span> <span>2019</span></li>
              </div>
            </div>
          </div>

          <div className='w-full rounded-lg relative shadow-sm hover:shadow-2xl  shadow-slate-200/30 transition-shadow duration-300 ease-in-out   '>
            <div className='absolute -top-4 left-4 bg-green-500 px-2 rounded-md  '>2018-2019</div>
            <div className='p-3 pt-5'>
              <p className='sm:text-xl'>10th Standard</p>
              <div className='flex flex-row flex-wrap sm:gap-4 justify-between text-[10px] sm:text-sm '>
                <li><span className='text-slate-300/40 hover:text-white transition ease-in duration-150'>Aggregate percentage</span> <span>89.80%</span></li>
                <li><span className='text-slate-300/40 hover:text-white transition ease-in duration-150'>Board/location:</span> <span>MSBSHSE (Madha)</span></li>
                <li><span className='text-slate-300/40 hover:text-white transition ease-in duration-150'>Year of passout:</span> <span>2019</span></li>
              </div>
            </div>
          </div>





        </div>

        {/* right side */}

        <div className="right   sm:w-[50%] w-full p-4 min-h-[50vh]  border border-slate-50/10 rounded-lg   ">
        {/* ACHIEVEMENTS */}
          
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="ACHIEVEMENTS" sx={{ color: 'white' }} value="1"  />
                  <Tab label="other ACTIVITIES"   sx={{ color: 'white' }} value="2" />
                  <Tab label="Personal Interest"  sx={{ color: 'white' }} value="3" />
                </TabList>
              </Box>
              {/* ACHIEVEMENTS */}
              <TabPanel value="1" >
                <div className=' flex flex-col sm:flex-row gap-4 flex-wrap items'>

                  <AchievementCard title={'Gate 2024 qulified'.toUpperCase()} description={'Qualified GATE 2024 exam in 3rd year and looking forward to improve rank '} />
                  <AchievementCard title={'Pioneering Innovation with Patent Applications'.toUpperCase()} />
                </div>
              </TabPanel>

              {/* other activities */}
              <TabPanel value="2">
                {/* other activities */}
                <div className="flex flex-col flex-wrap">
                  <li className="max-w-sm w-full  shadow-slate-50/10 shadow-sm  rounded-lg p-4 mt-2  transition-shadow duration-300 ease-in-out transform " >Managing Direactor @levo</li>
                  <li  className="max-w-sm w-full  shadow-slate-50/10 shadow-sm  rounded-lg p-4 mt-2  transition-shadow duration-300 ease-in-out transform ">CHAIRMAN, ISF-SKNCOE</li>
                  <li  className="max-w-sm w-full  shadow-slate-50/10 shadow-sm  rounded-lg p-4 mt-2  transition-shadow duration-300 ease-in-out transform ">Anvita Kala Mandal</li>
                </div>

              </TabPanel>

              {/* personal Interest */}
              <TabPanel value="3">

                <div className="flex flex-col flex-wrap ">
                <li className="max-w-sm w-full  shadow-slate-50/10 shadow-sm  rounded-lg p-4 mt-2  transition-shadow duration-300 ease-in-out transform " >CORE innovation</li>
                <li className="max-w-sm w-full  shadow-slate-50/10 shadow-sm  rounded-lg p-4 mt-2  transition-shadow duration-300 ease-in-out transform ">Love to learn with experiments</li>
                <li className="max-w-sm w-full  shadow-slate-50/10 shadow-sm  rounded-lg p-4 mt-2  transition-shadow duration-300 ease-in-out transform ">Thrilled to do the impossible</li>
                </div>
              </TabPanel>
            </TabContext>
          </Box>

        </div>
      </div>

    </>
  )
}

export default About