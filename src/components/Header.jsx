import React, { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

function Header() {

    const [isMenuOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            setIsScrolled(window.screenY > 50);
        }
        window.addEventListener("scroll", handleScroll)
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href) =>{
        const element = document.querySelector(href);
        if(element){
            element.scrollIntoView({behavior: "smooth"});
        }
        setIsOpen(false);
    }

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
        ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-0 transition-all duration-500 ${isScrolled ? "bg-slate-950 backdrop-blur-lg shadow-lg border-b border-slate-800" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 py-4">
            <div className = "flex items-center justify-between">
                <div className='text-2xl font-bold'>
                    <span className='text-green-400'>
                        BEDDI
                    </span>
                    <span className='text-blue-400'>
                        DINE
                    </span>
                </div>

                {/* Desktop menu*/}

                <nav className='hidden md:flex space-x-8'>
                    {navItems.map((item, index) => {
                        return <button key={index} className='text-gray-300 hover:text-green-400 transition-all duration-300 font-medium relative group'
                        style= {{animationDelay: `${index* 0.1}s`}}>
                            {item.name}
                            <span className='absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full'></span>
                            </button>
                    })}
                </nav>

                <button className='hidden md:flex items-center gap-2 bg-green-600 text-white px-6
                py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium
                shadow-lg hover:shadow-xl hover:scale-105'>
                    Download CV Now
                </button>

                {/*Mobile menu button*/}

                <button className='text-white md:hidden'
                        onClick={()=>setIsOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24}/>}
                </button>

                {/*Mobile navigation*/}
                {isMenuOpen && (
                    <nav className='md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg'>
                        {navItems.map((item, index) => {
                        return (<button key={index} className='bock w-full text-left py-3 px-4 text-gray-300
                                hover:text-green-400 hover:bg-slate-700 transition-all duration 300 rounnded-lg'>
                                {item.name}
                               </button>
                                );
                        })}
                        <button className='mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300'>
                            Download CV now
                        </button>

                </nav>
                    )
                }

            </div>
        </div>

    </header>
  )
}

export default Header
