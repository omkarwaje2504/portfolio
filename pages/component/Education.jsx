import React from 'react'

const Education = (props) => {
  return (
    <div className='flex flex-col space-y-2'>
    <div className='flex flex-col md:flex-row w-full justify-between md:items-center'>
        <h1 className='2xl:text-4xl text-2xl font-semibold uppercase text-[#4C89F8]'>{props.institute} <span className='text-white'>({props.std})</span></h1>
        <p className='font-medium text-sm md:text-3xl mt-2 md:mt-0'>
            {props.period}
        </p>
    </div>
    <h1 className='text-lg md:text-2xl'>{props.board}</h1>
    <h1 className='text-lg md:text-2xl'>{props.status}</h1>
</div>
  )
}

export default Education
