import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = (props) => {
    return (
        <div className='w-2/3 items-center flex flex-col space-y-4 font-semibold text-3xl' ><CircularProgressbar value={props.value} text={`${props.value}%`}
            styles={buildStyles({
                strokeLinecap: 'round',
                // Colors
                pathColor: `rgba(76, 137, 248)`,
                textColor: '#ffffff'
            })} />
            <h1>{props.skill}</h1>
        </div>
    )
}

export default ProgressBar
