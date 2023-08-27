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
            <div className="min-h-screen flex justify-center items-center bg-slate-300">
                <div className="text-5xl font-bold text-gr" data-aos="fade-up">
                    WorkExperience Section
                </div>
            </div>
        </>
    )
}

export default WorkExperience