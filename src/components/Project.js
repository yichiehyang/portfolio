import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import '../css/font.css';
import '../index.css'

function Project() {
    useEffect(() => {
        // Init Tabs Materialize JS
        let scrollspy = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(scrollspy);
    }, []);

    return (
        <>
            <section className="section grey lighten-5 section-project scrollspy" id="project">
                <div className="container">
                    <h3 className="center grey-text text-darken-2">Projects</h3>
                    <h6 className="grey-text text-darken-2 center">
                        Watch more projects on my <span className="blue-text"><a
                            href="https://github.com/yichiehyang" target="_blank" rel="noreferrer" id="github-repo-link">GitHub</a></span>
                    </h6>

                    <div className="row">
                        <a href="https://emailer-irene.herokuapp.com/" className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img className="responsive-img" src="./project_img/eMailer.png" alt="eMailer"></img>
                                    <div className="overlay"></div>
                                    <span className="card-title"><p>Node.js | Express.js | React | Redux | MongoDB</p></span>
                                </div>
                                <div className="card-action">
                                    <p className=" project-title">
                                        eMailer
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div className=" valign-wrapper col m5 offset-m1">
                            <h5 className="grey-text text-darken-3">eMailer</h5>
                            <span className="grey-text text-darken-3 project-info">
                                A full-stack application with advanced features, such as Google authentication, billing method, and email handling, for sending mass emails to many users in order to collect feedbacks.


                            </span>
                        </div>
                    </div>

                    <div className="row">
                        <a href="https://explore-taiwan.herokuapp.com/" className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img className="responsive-img" src="./project_img/Explore_Taiwan.png" alt="Explore Taiwan"></img>
                                    <div className="overlay"></div>
                                    <span className="card-title"> <p>Node.js | Express.js | MongoDB</p></span>
                                </div>
                                <div className="card-action">
                                    <p className="project-title">
                                        Explore Taiwan
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div className=" valign-wrapper col m5 offset-m1">
                            <h5 className="grey-text text-darken-3">Explore Taiwan</h5>
                            <span className="grey-text text-darken-3 project-info">
                                An application displaying the sightseeings with rating in Taiwan. Users can register and log in the website then they are able to leave and see reviews in each sightseeing.
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <a href="https://github.com/yichiehyang/Its-Movier" className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img className="responsive-img" src="./project_img/Its_Movier.png" alt="Its Movier"></img>
                                    <div className="overlay"></div>
                                    <span className="card-title"><p>Python | Flask | HTML/CSS | Data Analysis</p></span>
                                </div>
                                <div className="card-action">
                                    <p className="project-title">
                                        It's Movier
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div className=" valign-wrapper col m5 offset-m1 ">
                            <h5 className="grey-text text-darken-3">It's Movier</h5>
                            <span className="grey-text text-darken-3 project-info">
                                A Flask application related to movies. It includes some games such as Kevin Bacon Game and movie recommendations. 

                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <a href="https://github.com/yichiehyang/Highlighter" className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img className="responsive-img" src="./project_img/Highlighter.png" alt="Highlighter"></img>
                                    <div className="overlay"></div>
                                    <span className="card-title"><p>Python | Flask | HTML/CSS | Text Mining</p></span>
                                </div>
                                <div className="card-action">
                                    <p className="project-title">
                                        Highlighter
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div className=" valign-wrapper col m5 offset-m1">
                            <h5 className="grey-text text-darken-3">Highlighter</h5>
                            <span className="grey-text text-darken-3 project-info">
                                An application helping students who speak Mandarin to prepare GRE and TOEFL tests. It uses pandas and nltk packages to scan 7,000 GRE and TOEFL words in the articles which provided by users, and output the vocabulary lists with meanings. Users can download the list into Excel file.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

};

export default Project;