import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi';
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

export default function Home() {
  return(
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*Text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl font-medium text-accent-hover"> <span className="text-accent">Aspiring</span> Software Development Engineer</span>
            <h1 className="h1">
              Hi! I'm <br /> <span className="text-accent-hover">LS Narmadha</span>
            </h1>
            <p className="max-w-[500px] mb-7 text-accent">
              Driven by a love for technology and problem-solving, I create innovative <span className="text-accent-hover font-semibold">Digital</span> and <span className="text-accent-hover font-semibold"> Virtual Solutions</span> to enhance user experiences. Always eager to learn, grow and push boundaries in the tech space.</p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border border-accent-hover rounded-full flex justify-center items-center text-accent-hover text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500 uppercase gap-2"
              >
                <a href="/LSNarmadha_Resume110225.pdf" download>
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent-hover rounded-full flex justify-center items-center text-accent-hover text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"/>
              </div>
          </div>
          </div>

          {/*Photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
