import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-5xl font-bold text-gr" data-aos="fade-up">
                Projects Section
                </div>
                
            </div>
        </>
    )
}

export default Projects