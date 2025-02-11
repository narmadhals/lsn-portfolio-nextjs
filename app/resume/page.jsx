"use client";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaJava
  } from "react-icons/fa";

  import { 
    SiTailwindcss, 
    SiNextdotjs, 
    SiUnity, 
    SiPython, 
    SiC, 
    SiJavascript,
  } from "react-icons/si";


//About
const about = {
  title: "About Me",
  description: "I'm a Final Year Computer Science and Engineering student skilled in Web Development (React, HTML, CSS, JavaScript, NodeJS, NextJS), AR/VR development and programming languages like Python, Java and C. Passionate about Machine Learning and competitive programming, I’m currently working on projects enhancing mental well-being and cognitive skills for children with Autism. Eager to apply my skills in a dynamic role focused on growth and innovation.",
  info:[
    {
      fieldName: "Email",
      fieldValue: "narmadha.ls.27@gmail.com"
      },
    {
      fieldName: "Languages",
      fieldValue: "English, Tamil, Hindi"
      },
  ]
};

//Internship Enxperience
const internExp = {
  title: 'My Internship Experience',
  items: [
    {
      company: "Sri Sairam Techno Incubator Foundation",
      position: "Unity VR Developer Intern",
      duration: "FEB 2024 - JAN 2025",
      description: [
        "Contributed to the Interactive Skills Enhancer, improving learning for children with ASD and ID.",
        "Developed Merritopia, enabling immersive therapy through virtual reality.",
      ],
    },
    {
      company: "iTNT Hub - TamilNadu Technology Hub",
      position: "Data Analyst Intern",
      duration: "AUG 2023 - NOV 2023",
      description: [
        "Optimized web scraping with Python, reducing time by 50%.",
        "Visualized data using Power BI for impactful insights.",
        "Coordinated events to connect professionals and startups.",
      ],
    },
  ],
};


//Education
const education = {
  title: 'My Education',
  items:[
    {
      school: "Sri Sairam Engineering College, Chennai",
      year: "BE - Computer Science and Engineering",
      percentage: "85.3%",
      duration: "2021 - 2025"
    },
    {
      school: "Kendriya Vidyalaya No. 2, AFS Tambaram",
      year: "12th - CBSE",
      percentage: "94.8%",
      duration: "2020 - 2021"
    },
    {
      school: "Kendriya Vidyalaya No. 2, AFS Tambaram",
      year: "10th - CBSE",
      percentage: "88.6%",
      duration: "2018 - 2019"
    }
  ]
};

//skills
const skills={
  title: "My Skills",
  description: "Skilled in Web Development (React, HTML, CSS, JavaScript), AR/VR development and programming (Python, Java, C). Passionate about competitive programming, machine learning and public speaking.",
  skillsList: [
    {
      icon: <FaNodeJs />,
      name: "NodeJS"
    },
    {
      icon: <SiJavascript />,
      name: "Javascript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS"
    },
    {
      icon: <SiUnity />,
      name: "Unity3D"
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <SiTailwindcss />,
      name: "TailWindCSS"
    },
    {
      icon: <SiPython />,
      name: "Python Programming"
    },
    {
      icon: <FaJava />,
      name: "Java Programming"
    },
    {
      icon: <SiC />,
      name: "C Programming"
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 1.25, duration: 0.4, ease: "easeIn"},
    }}
    className="nin-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
    <div className="container mx-auto">
      <Tabs 
      defaultValue="about"
      className="flex flex-col xl:flex-row gap-[50px]"
      >
        <TabsList className="flex flex-col w-[550px] mx-auto xl:mx-0 gap-12">
          <TabsTrigger value="about" className="text-xl font-bold">About</TabsTrigger>
          <TabsTrigger value="skills" className="text-xl font-bold">Skills</TabsTrigger>
          <TabsTrigger value="education" className="text-xl font-bold">Education</TabsTrigger>
          <TabsTrigger value="internExp" className="text-xl font-bold">Internship Experience</TabsTrigger>
        </TabsList>

        {/*Content*/} 
        <div className="min-h-[70vh] w-full">
          {/*About Section*/}
          <TabsContent value="about" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold text-accent-hover">{about.title}</h3>
              <p className="text-justify">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 xl:max-0">
                {about.info.map((item,index)=> (
                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                <span className="text-[#89517a]">{item.fieldName}</span>
                <span className="text-accent-hover text-xl">{item.fieldValue}</span>
              </li>
                  )
                )}
              </ul>
            </div>
          </TabsContent>              


                {/*Skills Section*/}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent-hover">{skills.title}</h3>
                <p className="text-justify mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="mt-2 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:gap-[40px] text-center">
                {skills.skillsList.map((skill,index)=>{
                  return <li key={index}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="text-6xl text-[#89517a] hover:text-accent-hover/80 group-hover:text-accent-hover transition-all duration-200">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            {skill.name}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>;
                })}
              </ul>
            </div>
          </TabsContent>


          {/*Education Section*/}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold text-accent-hover">{education.title}</h3>
              <p className="text-justify">{education.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] xl:max-0 -mt-10">
                {education.items.map((item,index)=> (
                <li
                key={index}
                className="bg-[#391c31]/60 min-h-[184px] py-6 px-10 rounded-xl flex flex-col text-center lg:text-left "
              >
                <span className="text-[#89517a] font-semibold">{item.duration}</span>
                <h3 className="text-accent-hover/60 text-lg">{item.year}</h3>
                <span className="text-accent-hover font-medium">{item.percentage}</span>
                <p className="text-white/85">{item.school}</p>
              </li>  
                  )
                )}
              </ul>
            </div>
          </TabsContent>

          {/*Internship Experience Section*/}
          <TabsContent value="internExp" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold text-accent-hover">{internExp.title}</h3>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[20px] -mt-3">
              {internExp.items.map((item, index) => (
                <li
                  key={index}
                  className="bg-[#391c31]/60 min-h-[184px] py-6 px-10 rounded-xl flex flex-col gap-4 text-center lg:text-left"
                >
                <span className="text-accent-hover font-semibold">{item.duration}</span>
                <h3 className="text-white/85 text-lg text-xl">{item.position}</h3>
                <span className="text-accent-hover font-medium">{item.company}</span>
                  <ul className="list-disc list-inside text-white space-y-2 xl:text-justify-between">
                    {item.description.map((point, idx) => (
                    <li key={idx} className="text-accent-hover/60">
                    {point}
                  </li>
                ))}
                </ul>
                </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          

        </div>
      </Tabs>
    </div>
    </motion.div>
  )
}

export default Resume