import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div role='footer' >

            <div className='flex flex-col  sm:grid  grid-cols-[3fr_1fr_1fr] gap-14  my-10  text-sm border-t-[0.1px]  py-2 border-cyan-200/20 '>
                <div>

                    <p className='w-full md:w-2/3 flex flex-col gap-1  '>
                        <ul>

                            <li>- Crafting digital experiences with a touch of tech savvy. Let’s connect and create something great!</li>
                            <li>- Powered by passion, fueled by innovation. Ready to bring ideas to life – let’s collaborate!</li>
                        </ul>
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 '>{"Connect with me".toUpperCase()}</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <a className='text-blue-500 hover:text-blue-700 transition ease-in duration-150' href="https://linkedin.com/in/prabhanjandhobale" target='_blank'>LinkedIn</a>
                        <a className='text-blue-500 hover:text-blue-700 transition ease-in duration-150' href="https://github.com/Theprabhanjan" target='_blank'>Github</a>
                        <a className='text-blue-500 hover:text-blue-700 transition ease-in duration-150' href="https://orcid.org/my-orcid?orcid=0009-0008-8476-6930" target='_blank'>Orcid</a>


                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-800'>
                        <a href='tel:+91-9404606271' className='text-gray-400/80'>+91-9404606271</a>
                        <a href='mailto:prabhanjandhobale.skn.entc@gmail.com'><a className='text-gray-400/80'>prabhanjandhobale.skn.entc@gmail.com</a> </a>
                        <a href='mailto:prabhanjandhobale18@gmail.com' className='text-gray-400/80'>prabhanjandhobale18@gmail.com (personal)</a>

                    </ul>
                </div>

            </div>
                
            <div>
                <p className=' handWritten-font py-5 text-sm text-center'> Thank You ! Happy to see you</p>
            </div>
        </div>
    )
}

export default Footer