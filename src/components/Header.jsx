import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY) {
            // Scrolling down, hide the header
            setScrolled(true);
        } else {
            // Scrolling up, show the header
            setScrolled(false);
        }

        setPrevScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY]);


    return (
        <>
         <div className={` top-0 w-full z-30 ${scrolled ? 'shadow-md' : 'fixed'}`} data-aos="fade-down" data-aos-duration="900">
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 px-14">
                    <Link
                        to="hero-section"
                        smooth={true} className="flex items-center cursor-pointer">
                        <img
                            src="/logo.png"
                            className="h-12 mr-3"
                            alt="Flowbite Logo"
                        />
                    </Link>
                    <button
                        data-collapse-toggle="navbar-dropdown"
                        type="button"
                        onClick={toggleDropdown}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-dropdown"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${dropdownOpen ? 'block' : 'hidden' } w-full md:block md:w-auto`}
                        id="navbar-dropdown"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link
                                    to="about-section"
                                    smooth={true}
                                    className="block py-2 pl-3 pr-4 cursor-pointer md:hover:text-customOrange rounded md:bg-transparent md:p-0"
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="skills-section"
                                    smooth={true}
                                    className="block py-2 pl-3 pr-4 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange md:p-0"
                                >
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="work-experience-section"
                                    smooth={true}
                                    className="block py-2 pl-3 pr-4 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange md:p-0"
                                >
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="projects-section"
                                    smooth={true}
                                    className="block py-2 pl-3 pr-4 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange md:p-0"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact-section"
                                    smooth={true}
                                    className="block py-2 pl-3 pr-4 cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-customOrange md:p-0"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
            
        </>
    );
}

export default Header;
