import React from 'react';

const SideBar = () => {
    return (
        <div className='border-l border-white h-1/2 px-6 flex flex-col py-4 justify-around '>
            <img src="/_images/navigation/home.svg" alt="home_icon" />
            <img src="/_images/navigation/education.svg" alt="education_icon" />
            <img src="/_images/navigation/skill.svg" alt="skill_icon" />
            <img src="/_images/navigation/experience.svg" alt="experience_icon" />
            <img src="/_images/navigation/project.svg" alt="project_icon" />
        </div>
    );
}

export default SideBar;
