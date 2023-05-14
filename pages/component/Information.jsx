import React from 'react';
import useAOS from '../useAOS'
import Education from './Education';
import ProgressBar from './ProgressBar';
import Experience from './Experience';
import Project from './Project';

const Information = () => {
    useAOS();
    return (
        <div className='p-6 text-white h-[90vh] overflow-y-scroll scrollbar-none'>
            {/* ----------------------------profile ---------------------------------------------------------------- */}
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
            {/* ----------------------------Educations ---------------------------------------------------------------- */}
            <div className='mt-16'>
                <div className='mt-20'>
                    <h1 className='lg:text-2xl py-1'>Education</h1>
                    <hr />
                </div>
                <div className='mt-16 space-y-12'>
                    <Education institute="ST. ANTHONY'S HIGH SCHOOL" std="SSC" period="2018-19" board="Maharashtra state board" status="Passed" />
                    <Education institute="Viva College" std="hsc" period="2020-21" board="Maharashtra state board" status="Passed" />
                    <Education institute="Vartak College" std="BSC CS" period="2022-23" board="Mumbai University" status="Passed" />
                    <p className='text-2xl font-base'>
                        "<span className='text-3xl font-semibold text-[#4C89F8]'>Education is not a destination</span>; it is a lifelong journey fueled by curiosity.
                        As I tread the path of learning, I embrace the boundless horizons of knowledge,
                        for I am a seeker who will never cease to acquire wisdom and forge a future
                        illuminated by the brilliance of continuous growth."
                    </p>
                </div>
            </div>
            {/* ---------------------------------Skills ------------------------------------------------------------------- */}
            <div className='mt-16 space-y-12'>
                <div className='mt-20'>
                    <h1 className='lg:text-2xl py-1'>Skills</h1>
                    <hr />
                </div>
                <div className='space-y-20 py-4'>
                    <div className='grid grid-cols-3 gap-16'>
                        <ProgressBar value={85} skill="Photoshop" />
                        <ProgressBar value={78} skill="Illustrator" />
                        <ProgressBar value={90} skill="Adobe XD" />
                        <ProgressBar value={90} skill="Tailwind css" />
                        <ProgressBar value={75} skill="React Js" />
                        <ProgressBar value={53} skill="Next-Js" />
                    </div>
                    <h1 className='text-2xl font-base'>"From a noob to a pro, my learning path is an evolving symphony of skills.
                        With relentless dedication, I forge ahead, embracing the challenges that
                        shape me into a masterful developer."</h1>
                </div>
            </div>
            {/* ---------------------------------Skills ------------------------------------------------------------------- */}
            <div className='mt-16 space-y-12'>
                <div className='mt-20'>
                    <h1 className='lg:text-2xl py-1'>Experience</h1>
                    <hr />
                </div>
                <div className='space-y-20 py-4'>
                    <Experience year={'2021'} job={'DATA ENTRY JOB'} period={"6 months"} company={"Riddhi coporation/Mumbai"} des={`"I manage data, ensuring everything is neatly arranged and easily accessible, paving the way for smooth and efficient operations."`} />
                    <Experience year={'2022'} job={'GRAPHIC DESIGNER '} period={"3 months"} company={"AdFJ studios/Boisar"} des={`"In the realm of design, I masterfully create captivating logos, banners, brochures, social media posts, and videos. With each stroke and edit, I breathe life into visuals that leave a lasting impression."`} />
                    <Experience year={'2023'} period={'Currently working'} job={'Developer / graphic designer'}  company={"Sai Ashirwad Informatia/Bhayander"} des={`"I paint the digital canvas with pixels, blend code and creativity, sculpting experiences that bridge art and technology. As a multidisciplinary creator, I bring visions to life, weaving design, development, and user-centered magic into seamless digital tapestries."`} />
                </div>
            </div>
            <div className='mt-16 space-y-12'>
                <div className='mt-20'>
                    <h1 className='lg:text-2xl py-1'>Project</h1>
                    <hr />
                </div>
                <div className='space-y-20 py-4'>
                   <Project project="crypstat" heading="The most powerfull graph analysis tool."/>
                </div>
            </div>
        </div>


    );
}

export default Information;
