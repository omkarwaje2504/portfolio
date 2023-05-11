import React from 'react'
import SideBar from './SideBar';
import Information from './Information'
const Portfolio = (props) => {
    return (
        <div className='flex flex-col p-4 rounded-lg border border-white h-full items-center justify-center w-full '>
            <div className='bg-[#212121] rounded-lg w-full h-full flex flex-row pl-8'>
                <div className='w-full'>
                    <Information />
                </div>
                <div className='items-center flex h-full'>
                    <SideBar />
                </div>
            </div>
        </div>
    )
}
export default Portfolio;