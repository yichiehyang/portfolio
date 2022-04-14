import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import '../css/font.css';
import '../index.css'

function About() {

    useEffect(() => {
        let scrollspy= document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(scrollspy);
    }, []);

    return (
        <>
            <section className="section grey lighten-5 grey-text text-darken-3 scrollspy section-about" id="about">
                <div className="container center">
                    <h3>About Irene</h3>
                    <h6 className="grey-text text-darken-2">
                    I am a graduate student at University of Michigan pursuing my Masters in Information Science. I have a growing interest in Web development. While studying information science, I find myself being passionate for web development and have experience in building full-stack website, which is challenging but interesting!
                    </h6>
                    
                    
                    
                    
                </div>
            </section>

        </>
    )

};

export default About;