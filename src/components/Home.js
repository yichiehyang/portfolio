import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import '../css/font.css';
import '../index.css'
function Home() {

    useEffect(() => {
        let slider = document.querySelectorAll(".slider");
        M.Slider.init(slider, {
            indicators: false,
            interval: 5000,
        });
    }, []);

    useEffect(() => {
        let sidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenav, {
            edge: 'right',
            preventScrolling: false
        })
    }, []);

    useEffect(() => {
        let scrollspy = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(scrollspy);
    }, []);
    
    return (
        <>
            <div className="navbar-fixed">
            <nav>
                <div className="container">
                    <a href="#" className="brand-logo">
                        
                        Irene Yang
                    </a>
                    <a href="#" className="right sidenav-trigger show-on-medium-and-up" data-target="slide-out">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
            </nav>
            </div>
            

 
            <div className="slider scrollspy" id="home">
                <ul className="slides">
                    <li>
                        <img src="./Banner.jpg" alt="Background image of Irene"></img>
                        <div className="caption left-align grey-text text-lighten-5">
                            <h3>Welcome and Enjoy!</h3>
                            <h5>Check out my portfolio</h5>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    )

};

export default Home;