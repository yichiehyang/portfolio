import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import '../css/font.css';
import '../index.css'

function Contact() {


    useEffect(() => {
        let scrollspy = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(scrollspy);
    }, []);

    return (
        <>
            <footer className="page-footer orange accent-1">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            
                            <h6 className="grey-text text-darken-4">Learn more about Me! </h6>
                            <div id="footer-links">
                                <a href="https://github.com/yichiehyang" target="_blank" rel="noreferrer">
                                    <img src="github.png" className="footer-logo" alt="guthub"></img>
                                    </a>
                                
                                <a href="https://www.linkedin.com/in/yi-chieh-yang/" target="_blank" rel="noreferrer">
                                    <img src="linkedin.png" className="footer-logo" alt="linkedin"></img>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright center">
                    <div className="container brown-text">
                        Irene's Portfolio © 2021 Copyright
                    </div>
                </div>
            </footer>
        </>
    )

};

export default Contact;