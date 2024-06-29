import {  React, useState, useRef, useEffect } from 'react'
import { FaSquareGithub, FaLinkedin, FaSquareInstagram, FaArrowDownLong, FaRegUser } from "react-icons/fa6";
import dev_img from "../../assets/images/dev_image.jpg"

const About = () => {

    const [isInterSectingProfile, setInterSectingProfile] = useState(false);
    const [isInterSectingAbout, setInterSectingAbout] = useState(false);
    const refProfile = useRef(null);
    const profileAbout = useRef(null)

    useEffect(() => {
        const profileObserver = new IntersectionObserver(
            ([entry]) => {
                setInterSectingProfile(entry.isIntersecting)
            }, {rootMargin: "-150px"}
        );

        profileObserver.observe(refProfile.current);

    }, [isInterSectingProfile])

    useEffect(() => {
        if(isInterSectingProfile) {
            refProfile.current.classList.add("scrollAnimate");
        }
    }, [isInterSectingProfile])

    // Intersecting Observer for about text section 
    useEffect(() => {
        const aboutObserver = new IntersectionObserver(
            ([entry]) => {
                setInterSectingAbout(entry.isIntersecting)
            }, {rootMargin: "-150px"}
        );

        aboutObserver.observe(profileAbout.current);

    }, [isInterSectingAbout])

    useEffect(() => {
        if(isInterSectingAbout) {
            profileAbout.current.classList.add("scrollAnimate");
        }
    }, [isInterSectingAbout])

  return (
    <div id='aboutme' className='container py-5 md:py-10 aboutAnimate'>
        <h2 className='text-4xl sm:text-5xl font-MontserratSemiBold lowercase'>.ABOUT</h2>
        <div className='mt-5 flex flex-wrap gap-3 tab:w-3/5'>
            <div ref={refProfile} className='flex gap-5 items-center aboutProfile'>
                <img 
                    className='profilImage select-none size-24 md:size-28 rounded-full outline outline-offset-4 outline-primary'
                    src={dev_img} 
                    alt="Profile Image"
                    title='Afreedh'
                />
                <div className='space-x-5 flex profileLinks'>
                    <a href='https://github.com/Afree-dev' target='_blank'>
                        <FaSquareGithub className='fill-siteBlack hover:fill-primary size-7 xs:size-8' />
                    </a>
                    <a href='https://www.linkedin.com/in/afreedh-hanifa/' target='_blank'>
                        <FaLinkedin className='fill-siteBlack hover:fill-primary size-7 xs:size-8' />
                    </a>
                    <a href="#" className='cursor-not-allowed pointer-events-none'>
                        <FaSquareInstagram className='fill-siteBlack size-7 xs:size-8' />
                    </a>
                </div>
            </div>
            <p ref={profileAbout} className='text-xl md:text-2xl aboutTxt'>
                I'm a web developer who loves what I do, and I've hands-on experience and specialize in creating user-friendly and visually appealing websites using the latest technologies. I'm well-versed in JavaScript, React, and Node.js, which allows me to build dynamic and responsive web applications.
            </p>
        </div>
    </div>
  )
}

export default About