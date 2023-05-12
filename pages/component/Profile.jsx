import React from 'react'

const Profile = () => {
  return (
    <div className=' flex flex-col 2xl:py-12 lg:py-6 rounded-lg border border-white h-full items-center justify-center '>
      {/* --------------------Profile image ------------------------ */}
      <div className='w-2/3 lg:w-2/4 overflow-clip rounded-2xl'>
        <img src="/_images/profile-pic.png" alt="omkarProfile" className=' rounded-lg ' />
      </div>
      {/* --------------------profile ------------------------ */}
      <div className='p-3 text-white text-center space-y-1 2xl:mt-4 lg:mt-3'>
        <h1 className='2xl:text-3xl lg:text-2xl font-semibold uppercase'>Omkar Waje</h1>
        <p className='font-light 2xl:text-normal lg:text-sm'>Web Developer, UI / UX Designer <br></br>Graphic Designer</p>
      </div>
      {/* --------------------Email and location ------------------------ */}
      <div className='text-white text-center 2xl:space-y-1 2xl:mt-6 lg:mt-4 font-light w-full'>
        <p className='2xl:text-2xl lg:text-xl'>omkarwaje25042002@gmail.com</p>
        <p>Nallasopara (East)</p>
      </div>
      {/* --------------------social media icons ------------------------ */}
      <div className='flex flex-row justify-between w-1/2 2xl:mt-8 lg:mt-6'>
        <div className=' rounded-full 2xl:w-12 2xl:h-12 lg:w-8 lg:h-8 hover:bg-[#ff8521]'>
          <img src="/_images/instagram.svg" alt="instagram" /></div>
        <div className='rounded-full 2xl:w-12 2xl:h-12 lg:w-8 lg:h-8 hover:bg-[#4C89F8]'>
          <img src="/_images/facebook.svg" alt="facebook" /></div>
        <div className='rounded-full 2xl:w-12 2xl:h-12 lg:w-8 lg:h-8 hover:bg-[#0f3cb8]'>
          <img src="/_images/linkedIn.svg" alt="linkedIn" /></div>
        <div className='rounded-full 2xl:w-12 2xl:h-12 lg:w-8 lg:h-8 hover:bg-[#fa3535]'>
          <img src="/_images/gitlab.svg" alt="gitlab" /></div>
      </div>
      {/* ------------------------Contact me button ------------------ */}
      <button className='w-2/3 2xl:mt-6 lg:mt-4 rounded-lg bg-[#4C89F8] hover:bg-[#306ad4]  uppercase font-semibold 2xl:text-2xl lg:text-xl 2xl:py-4 lg:py-3 text-white'>
        contact me
      </button>
    </div>
  )
}
export default Profile;
