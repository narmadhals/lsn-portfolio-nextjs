"use client";
import HighlightSliderBtns from "@/components/HighlightSliderBtns"
import {BsArrowDownRight } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import React,{useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from "@radix-ui/react-tooltip";

const activities = [
  {
    num: "01",
    title: "SIH Finalist",
    description: "As SIH'24 Finalists at NIT Srinagar, Jammu and Kashmir, we developed an innovative VR and AR solution for the 1712 problem statement, creating an Interactive Skill Enhancer (ISE). Our team proudly secured the runners-up position, narrowly missing the top spot by just one mark!",
    image:"/asset/sih8.jpg",
    clip: "https://www.linkedin.com/feed/update/urn:li:activity:7276531272997355520/",
  },
  {
    num: "02",
    title: "MSME 3.O Hackathon Winners",
    description: "At the MSME 3.O Women's Hackathon, our team proudly emerged as winners, securing a funding of ₹9 lakhs for our project. We were the only team from our institution to achieve this milestone in 2024, showcasing our dedication and innovation on such a prestigious platform.",
    image:"/asset/msme.png",
    clip: "https://www.linkedin.com/feed/update/urn:li:activity:7182082177306669056/",
  },
  {
    num: "03",
    title: "Publisher of a Conference Paper",
    description: "I authored a conference paper titled 'Enhancing Mental Well-being through AI-Driven Virtual Environments: The Merrytopia Project,' in IEEE Xplore on December 12, 2024. Presented at a conference on October 8–9, 2024, it highlights AI's role in advancing mental well-being",
    image:"/asset/conff.png",
    clip: "https://ieeexplore.ieee.org/document/10780074",
  },
  {
    num:"04",
    title: "IEEE ITS SSEC SB Influencer",
    description:"I was honored to serve as the IEEE ITS Sri Sairam Engineering College SB Influencer for 2024–2025, where I fostered innovation, engagement, and collaboration among students, while promoting IEEE's mission and leading impactful initiatives within the institution.",
    image:"/asset/ieeee.png",
    clip: "https://edu.ieee.org/in-sairamits/members/",
  },
  {
    num: "05",
    title: "RaiseUp Special Speaker",
    description: "I am proud to serve as a Special Speaker at the RaiseUp Foundation, a startup founded by my classmates. In this role, I provide career counseling and share insights to help high-school students shape their professional journeys with confidence.",
    image:"/asset/raiseup.png",
    clip: "https://www.raiseupfoundation.in/",
  },
]


const Highlights = () => {
  const [activity,setActivity] = useState(activities[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex; // Get the active slide index
    setActivity(activities[newIndex]); // Update the current activity
  };  
  return (
    <motion.div>
      <motion.section
        initial = {{opacity:0}}
        animate={{opacity:1, transition: { delay: 1.25, duration: 0.4, ease: "easeIn"}}}
        className="min-h-[80vh] fllex flex-col justify-center py-5 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
              <div className="flex flex-col gap-[30px]">
                {/* Outline Num */}
                <div className="text-8xl leading-none font-bold text-outline">{activity.num}</div>
                {/* Title */}
                <h1 className="text-3xl font-bold text-accent-hover -mt-5">{activity.title}</h1>
                {/* Description */}
                <p className="text-justify">{activity.description}</p>
                {/* Border */}
                <div className="border border-white/20"></div>
                {/* Button */}
                <div className="text-accent-hover">
                  {/* External Link Button */}
                  <Link href={activity.clip}>
                  <TooltipProvider delayDuration={100} >
                    <Tooltip className="-mt-3">
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-accent-hover text-4xl hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Explore</p>
                      </TooltipContent>
                    </Tooltip>  
                  </TooltipProvider>              
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%] text-accent-hover text-bold leading-none group-hover:text-accent-hover/60 transition-all duration-300 capitalize">
              <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className="h-[390px] mb-3"
                onSlideChange={handleSlideChange}
                onSwiper={setSwiperInstance}
              >
                {activities.map((actvity, index)=>{
                  return <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div>
                        <Image
                          src={activity.image}
                          fill
                          className="object-cover"
                          alt="notfound"
                        />
                      </div>
                   </div>
                  </SwiperSlide>;
                })}
                </Swiper>
                {/* Slider Buttons */}
                <div>
                <HighlightSliderBtns
                  swiper={swiperInstance}
                  containerStyles="flex gap-4" 
                  btnStyles="w-12 h-12 bg-accent/40 hover:bg-accent rounded flex justify-center items-center " 
                  iconsStyles="text-2xl text-hover-accent"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Highlights
