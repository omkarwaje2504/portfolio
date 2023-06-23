import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = (props) => {
    return (
        <div className=' w-1/2 md:w-1/3 py-3 px-6 text-center md:py-6 lg:px-12 2xl:px-16 items-center flex flex-col space-y-4 font-semibold text-lg md:text-3xl' ><CircularProgressbar value={props.value} text={`${props.value}%`}
            styles={buildStyles({
                strokeLinecap: 'round',
                // Colors
                pathColor: `rgba(76, 137, 248)`,
                textColor: '#ffffff'
            })} />
            <h1 className='lg:text-xl'>{props.skill}</h1>
        </div>
    )
}

export default ProgressBar
