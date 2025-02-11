import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-5 xl:py-8 text-accent-hover">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              LS<span className="text-accent text-5xl">N</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
             <Link href="/contact">
              <Button>Hire Me</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="xl:hidden">
            <MobileNav />
          </div> 

        </div>
    </header>
  )
}

export default Header
