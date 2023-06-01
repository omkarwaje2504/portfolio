import React from 'react'

const Project = (props) => {
    const visit=()=>{
        window.location.href = "https://crypstat.omkarwaje.com/"
    }
    return (
        <div className='space-y-3'>
            <div className='w-full md:h-36 overflow-clip object-center md:items-center flex'>
                <img src={`/_images/${props.project}.jpg`} alt={props.project} />
            </div>
            <h1 className='flex flex-row text-xl md:text-4xl '>{props.project} - {props.heading}</h1>
            <p>{props.tech}</p>
            <div className='flex flex-col md:flex-row md:space-x-6 pt-6 items-center'>
                <button onClick={visit} className='text-lg md:text-2xl font-semibold text-white px-12 py-3 rounded-lg bg-[#4C89F8] w-full '>Click to visit</button>
                <button className='flex flex-row text-sm md:text-2xl items-center mt-2'>go to &nbsp;<span><img src="/_images/github.svg" alt="github_icon" /></span>ithub repo</button>
            </div>
        </div>
    )
}

export default Project
