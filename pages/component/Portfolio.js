import React from 'react'
import SideBar from './SideBar';
import Information from './Information'
const Portfolio = (props) => {
    return (
        <div className='flex flex-col p-4 rounded-lg border border-white h-[95vh] mb-6 md:h-full items-center justify-center w-full '>
            <div className='bg-[#212121] rounded-lg w-full h-full flex flex-row md:pl-8 p-2'>
                <div className='w-full overflow-hidden'>
                    <Information />
                </div>
                <div className='items-center md:flex h-full hidden'>
                    <SideBar />
                </div>
            </div>
        </div>
    )
}
export default Portfolio;