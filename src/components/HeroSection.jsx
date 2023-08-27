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
        <>
            <div className="min-h-screen flex justify-center items-center" id='hero-section'>
                <div className="text-5xl font-bold text-gr" data-aos="fade-up">
                    Hero Section
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => {navigate('/projects')}}
                >
                    Go to Projects
                </button>
            </div>
        </>
    )
}

export default HeroSection