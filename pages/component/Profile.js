import React from "react";
import Link from "next/link";

const Profile = () => {
  const component = () => {};
  return (
    <div className="relative flex flex-col 2xl:py-12 lg:py-6 rounded-lg border border-white h-full items-center justify-center p-3">
      {/* --------------------Profile image ------------------------ */}
      <div className="w-2/3 lg:w-2/4 overflow-clip rounded-2xl">
        <img
          src="/_images/profile-pic.png"
          alt="omkarProfile"
          className=" rounded-lg "
        />
      </div>
      {/* --------------------profile ------------------------ */}
      <div className="p-3 text-white text-center space-y-1 2xl:mt-4 lg:mt-3">
        <h1 className="2xl:text-3xl lg:text-2xl font-semibold uppercase">
          Omkar Waje
        </h1>
        <p className="font-light 2xl:text-normal text-sm">
          Web Developer, UI / UX Designer <br></br>Graphic Designer
        </p>
      </div>
      {/* --------------------Email and location ------------------------ */}
      <div className="text-white text-center 2xl:space-y-1 2xl:mt-6 lg:mt-4 font-light w-full text-sm">
        <p className="2xl:text-2xl lg:text-xl ">omkarwaje25042002@gmail.com</p>
        <p>Nallasopara (East)</p>
      </div>
      {/* --------------------social media icons ------------------------ */}
      <div className="flex flex-row justify-between md:w-1/2 w-1/2 2xl:mt-8 lg:mt-6 mt-4">
        <div className=" rounded-full 2xl:w-12 2xl:h-12 h-8 w-8 hover:bg-[#ff8521]">
          <img src="/_images/instagram.svg" alt="instagram" />
        </div>
        <div className="rounded-full 2xl:w-12 2xl:h-12 w-8 h-8  hover:bg-[#4C89F8]">
          <img src="/_images/facebook.svg" alt="facebook" />
        </div>
        <div className="rounded-full 2xl:w-12 2xl:h-12 w-8 h-8  hover:bg-[#0f3cb8]">
          <img src="/_images/linkedIn.svg" alt="linkedIn" />
        </div>
        <div className="rounded-full 2xl:w-12 2xl:h-12 w-8 h-8 hover:bg-[#fa3535]">
          <img src="/_images/gitlab.svg" alt="gitlab" />
        </div>
      </div>
      {/* ------------------------Contact me button ------------------ */}
      <button className="md:w-2/3 2xl:mt-6 lg:mt-4 mt-4 rounded-lg bg-[#4C89F8] hover:bg-[#306ad4]  uppercase font-semibold 2xl:text-2xl lg:text-xl text-sm w-fit px-6 2xl:py-4 lg:py-3 py-2 text-white">
        contact me
      </button>

      <Link className="absolute p-2 md:p-6 top-0 right-0" href="/lib/Dashboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      </Link>
    </div>
  );
};
export default Profile;
