import React from 'react'

const Project = (props) => {
    const visit=()=>{
        window.location.href = "https://crypstat.omkarwaje.com/"
    }
    return (
        <div className='space-y-3'>
            <div className='w-full h-36 overflow-clip object-center items-center flex'>
                <img src={`/_images/${props.project}.jpg`} alt={props.project} />
            </div>
            <h1 className='flex flex-row text-4xl '>{props.project} <p>- {props.heading}</p></h1>
            <p>{props.tech}</p>
            <div className='flex flex-row space-x-6 pt-6'>
                <button onClick={visit} className='text-2xl font-semibold text-white px-12 py-3 rounded-lg bg-[#4C89F8] '>Click to visit</button>
                <button className='flex flex-row text-2xl items-center'>go to &nbsp;<span><img src="/_images/github.svg" alt="github_icon" /></span>ithub repo</button>
            </div>
        </div>
    )
}

export default Project
