import React from 'react';
import useAOS from '../useAOS'

const Information = () => {
    useAOS();
    return (
        <div className='p-6 text-white h-[90vh] overflow-y-scroll scrollbar-none'>
            <div className=' flex flex-col  mt-3'>
                <div className='mt-4'>
                    <h1 className='lg:text-2xl py-1'>Profile</h1>
                    <hr />
                </div>
                <div className='mt-28' data-aos="fade-up" data-aos-duration="700">
                    <div className='space-y-3'>
                        <p className='lg:text-4xl font-light lg:w-2/3'>Designing digital experiences that captivate and inspire.
                        </p>
                        <h1 className='text-6xl font-normal'>welcome to my <b>portfolio!</b></h1>
                    </div>
                    <div className='mt-20'>
                        <p className='w-2/3 text-xl font-light'>I am <span className='text-[#4C89F8]'>omkar chandrakant waje</span>.<br></br>
                            Who aim to be able to find an exciting and challenging entre level
                            position in the it and graphic design sector alongside a company
                            who will continously motivate and improve on my skills and abilities</p>
                    </div>
                </div>
                <div className='mt-28 w-2/3 flex flex-row justify-between'>
                    <div className=''>
                        <h1 className='font-bold text-8xl text-[#4C89F8]'>2 +</h1>
                        <p className='text-3xl '>Projects Done</p>
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-8xl text-[#4C89F8]'>7 +</h1>
                        <p className='text-3xl '>Skills</p>
                    </div>

                </div>

            </div>

            <div className=' flex flex-col  mt-12'>
                <div className='mt-4'>
                    <h1 className='lg:text-2xl py-1'>Profile</h1>
                    <hr />
                </div>
                <div className='mt-28'>
                    <div className='space-y-3'>
                        <p className='lg:text-4xl font-light lg:w-2/3'>Designing digital experiences that captivate and inspire.
                        </p>
                        <h1 className='text-6xl font-normal'>welcome to my <b>portfolio!</b></h1>
                    </div>
                    <div className='mt-20'>
                        <p className='w-2/3 text-xl font-light'>I am <span className='text-[#4C89F8]'>omkar chandrakant waje</span>.<br></br>
                            Who aim to be able to find an exciting and challenging entre level
                            position in the it and graphic design sector alongside a company
                            who will continously motivate and improve on my skills and abilities</p>
                    </div>
                </div>
                <div className='mt-20 w-2/3 flex flex-row justify-between'>
                    <div className=''>
                        <h1 className='font-bold text-8xl text-[#4C89F8]'>2 +</h1>
                        <p className='text-3xl '>Projects Done</p>
                    </div>
                    <div className=''>
                        <h1 className='font-bold text-8xl text-[#4C89F8]'>7 +</h1>
                        <p className='text-3xl '>Skills</p>
                    </div>

                </div>

            </div>



        </div>


    );
}

export default Information;
