import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import '../css/font.css';
import '../index.css'

function More() {
    useEffect(() => {
        let parallax = document.querySelectorAll(".parallax");
        M.Parallax.init(parallax);
    }, []);

    useEffect(() => {
        let scrollspy = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(scrollspy);
    }, []);

    
    useEffect(() => {
        let modal = document.querySelectorAll(".modal");
        M.Modal.init(modal);
    }, []);
    return (
        <>
            <section className="section parallax-container scrollspy" id ="more-info">
                <div className="parallax">
                    <img src="./taipei101.jpg" alt="" className="more-pic"></img>
                    
                </div>

                <div id="resume-content">
                    <div className="row center black-text">
                        <h3 className="white-text">More on Resume</h3>
                        <div className="resume-link">
                            <a className="waves-effect waves-light btn modal-trigger red accent-2" href="#modal1">Education</a>

                            <div id="modal1" className="modal modal-fixed-footer ">
                                <div className="modal-content ">
                                    <h4>Education</h4>
                                    <div className="divider"></div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><h5>University of Michigan </h5>
                                                <h6>Master of Science in Information</h6></td>
                                                <td><p>Ann Arbor, MI</p>
                                                <p>Anticipated April 2023</p></td>
                                            </tr>
                                       
                                            <tr>
                                                <td>
                                                    <p style={{ fontSize: "1.15rem" }}>GPA:</p>
                                                    <p>Cumulative GPA: 4.0 / 4 </p>
                                                    <p style={{ fontSize: "1.15rem" }}>Relevant Coursework:</p>
                                                    <p>Web Design, Building Interactive Applications, Database Application Design, SQL and Databases</p>
                                                    <p style={{ fontSize: "1.15rem" }}>Anticipated Coursework:</p>
                                                    <p>Web Systems, Developing Mobile Experiences, Information Retrieval, Networks</p></td>
                                            </tr>

                                            <tr>
                                                <td><h5>National Cheng Kung University </h5>
                                                <h6>Bachelor of Foreign Languages and Linguistics | Minor: Psychology</h6></td>
                                                <td><p>Tainan, Taiwan</p>
                                                <p>June 2021</p></td>
                                            </tr>
                                            
                                            <tr>
                                                <td><p style={{ fontSize: "1.15rem" }}>GPA:</p>
                                                    <p>Cumulative GPA: 3.88 / 4 | Programming-related GPA: 3.91 / 4</p>
                                                    <p style={{ fontSize: "1.15rem" }}>Relevant Coursework:</p>
                                                    <p>Data Structure, Program Design, Discrete Math, Statistical Machine Learning, Artificial Intelligence</p></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <div className="modal-footer ">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                                </div>
                            </div>


                            <a className="waves-effect waves-light btn modal-trigger orange" href="#modal2">Skill</a>
                            <div id="modal2" className="modal modal-fixed-footer">
                                <div className="modal-content">
                                    <h4>Skill</h4>
                                    <div className="divider"></div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><h5>Language: </h5></td>
                                                <td><h6>Python / HTML5 / CSS / JavaScript / Golang / C </h6></td>
                                            </tr>
                                            <tr>
                                                <td><h5>Frontend: </h5></td>
                                                <td><h6>React.js / Redux.js / Bootstrap / Materialize.css</h6></td>

                                            </tr>
                                            <tr>
                                                <td><h5>Backend: </h5></td>
                                                <td><h6>Node.js / Express.js / Flask / Django / MongoDB / MySQL / SQLite </h6></td>

                                            </tr>
                                            <tr>
                                                <td><h5>Software: </h5></td>
                                                <td><h6>Git / Linux / Heroku</h6></td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                                </div>
                            </div>


                            <a className="waves-effect waves-light btn modal-trigger teal lighten-1" href="#modal3">Work Experience</a>
                            <div id="modal3" className="modal modal-fixed-footer">
                                <div className="modal-content">
                                    <h4>Work Experience</h4>
                                    <div className="divider"></div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><h5>Incoming Software Engineer Intern </h5>
                                                <h6>Coinbase | Backend Team </h6></td>
                                                <td><p>California, USA</p>
                                                <p>June 2022 – Aug. 2022 </p></td>
                                            </tr>
                                            
                                            <tr>
                                                <td><h5>NLP Research Assistant </h5>
                                                <h6>National Cheng Kung University | Urban Science and Computing Laboratory, EE </h6></td>
                                                <td><p>Tainan, Taiwan </p>
                                                <p>Oct. 2020 – June 2021</p></td>

                                            </tr>
                                            
                                            <tr>
                                                <td>
                                                    <p>
                                                    Assisted in research on using 110,000 fake news on Twitter as data to create a framework, MUFFLE, that could predict which fake news has a higher potential to disseminate
                                                    </p>
                                                    <p>Extracted features such as selecting keywords with TF-IDF to combine with Google Trend API as the popularity scores, calculating sentiment scores of the news with VADER, and conducting BERT for text feature with Python</p>
                                                <p>Connected all features with RNN to get prediction of fake news dissemination</p>
                                                </td>
                                            </tr>

                                        
                                            <tr>
                                                <td><h5>Undergraduate Researcher</h5>
                                                <h6>National Cheng Kung University | Psychometric Laboratory, PSY</h6></td>
                                                <td><p>Tainan, Taiwan </p>
                                                <p>Feb. 2020 – June 2020</p></td>

                                            </tr>
                                            
                                            <tr>
                                                <td>
                                                    <p>
                                                    Predicted Mandarin words’ polarity with Word2vec to create Mandarin Words Polarity Program using Python
                                                    </p>
                                                    <p>Used 14,000 Mandarin words with sentiment scores to do Machine Learning on classify words’ polarity (accuracy reached 0.91)</p>
                                                
                                                </td>
                                            </tr>
                                            


                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                                </div>
                            </div>

                            <a className="waves-effect waves-light btn modal-trigger indigo lighten-1" href="#modal4">Project Experience</a>
                            <div id="modal4" className="modal modal-fixed-footer">
                                <div className="modal-content">
                                    <h4>Project Experience</h4>
                                    <div className="divider"></div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><h5>eMailer – Web Application Implementation</h5>
                                                <h6>Tool Used: Node.js, Express.js, React.js, Redux, MongoDB </h6></td>
                                                <td><p>Ann Arbor, MI</p>
                                                <p>2021</p></td>
                                            </tr>
                                                                          
                                            <tr>
                                                <td>
                                                    <p>
                                                    Created a full-stack application that can send mass emails to customers automatically and collect customers’ feedback
                                                    </p>
                                                    <p>Added new features such as Google authentication to log in, billing method (Stripe-API), and email handling (SendGrid)</p>
                                                </td>
                                            </tr>

                                        
                                            <tr>
                                                <td><h5>It’s Movier – Web Application & Data Analysis Implementation</h5>
                                                <h6>Tool Used: Python, Jinja2, CSS, JavaScript</h6></td>
                                                <td><p>Ann Arbor, MI </p>
                                                <p>2021</p></td>

                                            </tr>
                                            
                                            <tr>
                                                <td>
                                                    <p>
                                                    Accessed data from web API to analyze and construct a movie-related game with movie recommendations using Breadth First Search in the Graph
                                                    </p>
                                                    <p>Set up a Flask Application to display interactive data analysis results and design</p>
                                                
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><h5>Explore Taiwan – Web Application Implementation</h5>
                                                <h6>Tool Used: Node.js, Express.js, MongoDB, Bootstrap, Heroku</h6></td>
                                                <td><p>Ann Arbor, MI </p>
                                                <p>2021</p></td>

                                            </tr>
                                            
                                            <tr>
                                                <td>
                                                    <p>
                                                    Built a responsive and full-fledged web application where users can share information on Taiwanese sightseeing and create, read, update, and delete their posts or reviews
                                                    </p>
                                                    <p>Utilized MongoDB to store users’ information and decorated website with Bootstrap</p>
                                                
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><h5>Highlighter – Text Mining & Web Application Implementation</h5>
                                                <h6>Tool Used: Python, HTML5, CSS, JavaScript</h6></td>
                                                <td><p>Tainan, Taiwan </p>
                                                <p>2020</p></td>

                                            </tr>
                                            
                                            <tr>
                                                <td>
                                                    <p>
                                                    Developed Flask Application using pandas and nltk packages to scan 7,000 GRE and TOEFL words in the article provided by users, output the vocabulary with the meanings into Excel, and helped hundreds of students prepare GRE and TOEFL tests
                                                    </p>
                                                 
                                                </td>
                                            </tr>
                                            


                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </section> 

            

        </>
    )

};

export default More;