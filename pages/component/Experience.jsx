import React from 'react'

const Experience = (props) => {
    return (
        <div>
            <div className='flex flex-col space-y-2'>
                <p className='text-lg md:text-xl'>{props.year}</p>
                <div className='flex flex-col md:flex-row w-full justify-between md:items-center'>
                    <h1 className='2xl:text-4xl text-2xl font-semibold uppercase text-[#4C89F8]'>{props.job}</h1>
                    <p className='font-semibold text-lg md:text-3xl capitalize'>
                        {props.period}
                    </p>
                </div>
                <h1 className='text-lg md:text-2xl'>{props.company}</h1>
                <h1 className='text-md md:text-2xl pt-3 md:pt-6 font-light'>{props.des}</h1>
            </div>
        </div>
    )
}

export default Experience
