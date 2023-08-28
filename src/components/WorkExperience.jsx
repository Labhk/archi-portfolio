import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function WorkExperience() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <>
            <div className="min-h-screen flex justify-center items-center" id="work-experience-section">
                <div className="text-5xl font-bold text-gr" data-aos="fade-up" data-aos-duration="1300">
                    WorkExperience Section
                </div>
            </div>
        </>
    )
}

export default WorkExperience