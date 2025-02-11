"use client";
import { CiMenuFries } from 'react-icons/ci';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import * as Dialog from '@radix-ui/react-dialog';

const links = [
  {
      name: "home",
      path: "/",
  },
  {
      name: "highlights",
      path: "/highlights",
  },
  {
      name: "resume",
      path: "/resume",
  },
  {
      name: "work",
      path: "/work",
  },
  {
      name: "contact",
      path: "/contact",
  }
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent-hover" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-start items-cente">
        <div className="mt-8 mb-14 text-center text-2xl">
          <Link href="/">
            <h1 className='text-4xl text-accent-hover font-bold'>
              Narmadha <span className='text-accent'>LS</span>
            </h1>
          </Link>
        </div>
        <nav className='flex flex-col items-center gap-8'>
          {links.map((link,index)=>{
            return (
            <Link href={link.path} 
            key={index} 
            className={`${
              link.path === pathname ? "text-accent-hover border-b-2 border-accent-hover scale-100" :
              "hover:text-accent transform hover:scale-105"} capitalize font-medium `
          }
            >
            {link.name}
            </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
