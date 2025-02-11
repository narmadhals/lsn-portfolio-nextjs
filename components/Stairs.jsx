import { AnimatePresence, motion } from "framer-motion"
const stairAnimation = {
    initial:{
        top:"0%",
    },
    animate:{
        top: "100%"
    },
    exit: {
        top: ["100%","0%"],
    },  // Don't go back to "0%" in exit, keep it at 100%
        
};

const reverseIndex = (index)=> {
    const totalSteps = 4;
    return totalSteps-index-1;
}

const Stairs = () => {
  return (
    <>
    {[...Array(4)].map((_, index) => {
        return(
            <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.25,
                    ease: "easeInOut", // Standard easing function
                    delay: reverseIndex(index) * 0.1,
                  }}
                className={`h-full w-full relative ${
                    index % 2 === 0 ? "bg-accent" : "bg-accent-hover"
                  }`}
            />
        );
    })}
    </>
  );
}

export default Stairs
