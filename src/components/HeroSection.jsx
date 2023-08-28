import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroSection() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="min-h-screen flex items-center px-14 bg-slate-200" id="hero-section">
            <div className="flex-1 p-10" data-aos="fade-up" data-aos-duration="1300">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    I'm Shubh Khatke <br/>
                     Architect
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique velit ut nisl fringilla, non consectetur metus tincidunt. Fusce viverra arcu sit amet leo scelerisque, vel auctor arcu tempus. Quisque quis bibendum nisi. 
                </p>
                <button
                    className="bg-customOrange hover:bg-blue-700 text-white font-semibold text-xl py-2 px-4 rounded-xl mr-4 shadow-custom"
                    onClick={() => { navigate('/projects') }}
                >
                    See My Projects
                </button>
                <button
                    className="bg-customMaroon hover:bg-gray-900 text-white font-semibold text-xl py-2 px-4 rounded-xl shadow-custom"
                    
                >
                    Download My CV
                </button>
                
            </div>
            <div className="flex-1" data-aos="fade-left" data-aos-duration="1300">  
                <img
                    src='/heroimg.jpg'
                    alt="Architect"
                    className="w-full h-full object-cover animated-img"
                />
            </div>
        </div>
    );
}

export default HeroSection;
