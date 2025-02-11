"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";

const info = [
  {
    icon: <FaEnvelope/>,
    title: "E-mail",
    description: "narmadha.ls.27@gmail.com"
  },
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "(+91) 73056 09629"
  },
  {
    icon: <FaMapMarkedAlt/>,
    title: "Address",
    description: "Tambaram, Chennai"
  }
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
    initial = {{opacity:0}}
    animate={{
      opacity:1, 
      transition: { delay: 1.25, duration: 0.4,ease: "easeIn"
      }}}
    className="nin-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#391c31]/50 rounded-xl mb-12"
          >
              <h3 className="text-4xl text-accent-hover">Let's Work Together</h3>
              <p>I'd love to hear from you! Whether you want to hire me or have a question or just want to connect, drop me a message and let's create something amazing together!</p>
              <div className="grid grid-cols-1 gap-6">
                <Input type="fullname" placeholder="Full Name"/>
                <Input type="email" placeholder="Email Address"/>
                <Input type="phone" placeholder="Phone Number"/>
              </div>
              {/* Text Message */}
              <Textarea 
              className="h-[100px]"
              placeholder="Type your message."
              />
              {/* Button */}
              <Button size="md" className="max-w-40 h-10">Send Message</Button>
            </form>
          </div>
          {/* Info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#391c31] text-accent-hover rounded-md flex items-center justify-center ">
                    <div>{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-accent-hover">{item.title}</p>
                    <h2 className="text-xl">{item.description}</h2>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
