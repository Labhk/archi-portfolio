import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <>
            <div className="min-h-screen flex justify-center items-center" id="skills-section" >
                <div className="text-5xl font-bold text-gr" data-aos="fade-up">
                    Skills Section
                </div>
            </div>
        </>
    )
}

export default Skills