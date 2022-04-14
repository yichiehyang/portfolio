import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import '../css/font.css';
function Skill() {
    useEffect(() => {
        // Init Tabs Materialize JS
        let parallax = document.querySelectorAll(".parallax");
        M.Parallax.init(parallax);
    }, []);
    
    useEffect(() => {
        let scrollspy = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(scrollspy);
    }, []);

    useEffect(() => {
        let slider = document.querySelectorAll(".slider");
        M.Slider.init(slider, {
            indicators: false,
            interval: 6000,
        });
    }, []);

    useEffect(() => {
        let tooltip = document.querySelectorAll(".tooltipped");
        M.Tooltip.init(tooltip);
    }, []);

    return (
        <section className="section scrollspy" id="skill">
            <div className="slider">
                <ul className="slides skill-parallax">
                    <li>
                        <img src="./Skill/skill-pic1.jpg" alt="mountain" className="skill-pic"></img>
                        <div className="caption right-align center">
                            <h3>Programming Language</h3>

                            <div className="flexbox">
                                <div className="tool-logo col s2 z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="Python">
                                    <img src="./Tool/Python.png" alt="Python" className="responsive-img" ></img>
                                </div>
                                <div className="tool-logo col s2 z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="JavaScript">
                                    <img src="./Tool/JavaScript.png" alt="JavaScrip" className="responsive-img"></img>
                                </div>
                                <div className="tool-logo col s2 z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="HTML/CSS">
                                    <img src="./Tool/HtmlCss.png" alt="html/css" className="responsive-img"></img>

                                </div>
                                <div className="tool-logo col s2 z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="Golang">
                                    <img src="./Tool/Golang.png" alt="Golang" className="responsive-img"></img>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <img src="./Skill/skill-pic2.jpg" alt="forest" className="skill-pic"></img>
                        <div className="caption right-align center">
                            <h3>Back-end Skill</h3>

                            <div className="flexbox">
                                <div className="tool-logo s2 col z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="Node.js">
                                    <img src="./Tool/NodeJS.png" alt="NodeJS" className="responsive-img"></img>
                                </div>
                                <div className="tool-logo s2 col z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="Express.js">
                                    <img src="./Tool/Express.png" alt="Express" className="responsive-img"></img>
                                </div>
                                <div className="tool-logo s2 col z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="MongoDB">
                                    <img src="./Tool/MongoDB.png" alt="MongoDB" className="responsive-img"></img>
                                </div>
                                <div className="tool-logo s2 col z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="MySQL">
                                    <img src="./Tool/MySQL.png" alt="MySQL" className="responsive-img"></img>
                                </div>
                            </div>

                        </div>
                    </li>

                    <li>
                        <img src="./Skill/skill-pic3.jpg" alt="ocean" className="skill-pic"></img>
                        <div className="caption right-align center">
                            <h3>Front-end Skill</h3>
                            <div className="flexbox">
                                <div className="tool-logo s2 col z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="React.js">
                                    <img src="./Tool/React.png" alt="React" className="responsive-img"></img>
                                </div>
                                <div className="tool-logo s2 col z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="Redux.js">
                                    <img src="./Tool/Redux.png" alt="Redux.js" className="responsive-img"></img>
                                </div>
                                <div className="tool-logo s2 col z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="Bootstrap">
                                    <img src="./Tool/Bootstrap.png" alt="Bootstrap" className="responsive-img"></img>
                                </div>
                                <div className="tool-logo s2 col z-depth-5 orange lighten-5 tooltipped" data-position="bottom" data-tooltip="Materialize.css">
                                    <img src="./Tool/Materialize.png" alt="Materialize.css" className="responsive-img"></img>
                                </div>
                            </div>

                        </div>
                    </li>


                </ul>
            </div>


        </section>
    )

};

export default Skill;