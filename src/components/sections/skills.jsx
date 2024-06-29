import {  React, useState, useRef, useEffect } from 'react'

const Skills = () => {
    
    const [skills, setSkills] = useState(["html", "css", "sass", "less", "tailwind", "JavaScript", "web design", "ui", "react", "Rest API" ]);
    const [isInterSecting, setInterSecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const skillObserver = new IntersectionObserver(
        ([entry]) => {
          setInterSecting(entry.isIntersecting);
        }, {rootMargin: "-150px"}
      );

      skillObserver.observe(ref.current)

    },[isInterSecting]);

    useEffect(() => {
      if(isInterSecting) {
        ref.current.classList.add("scrollAnimate");
      }
    }, [isInterSecting])

  return (
    <div ref={ref} id='skills' className='container py-5 md:py-10 skillsAnimate'>
        <h2 className='text-4xl sm:text-5xl font-MontserratSemiBold lowercase'>.SKILLS</h2>
        <div className='mt-5 flex flex-wrap gap-3 tab:w-3/5'>
            {skills.map((item, index) => (
                <span key={index} className='skillPill text-xl md:text-2xl px-4 md:px-6 py-1 border rounded-full bg-primary bg-opacity-5 hover:bg-primary hover:text-siteWhite hover:border-primary hover:!translate-x-1 transition-all cursor-pointer lowercase'>{item}</span>
            ))}
        </div>
    </div>
  )
}

export default Skills