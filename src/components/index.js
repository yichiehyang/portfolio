import React from "react";
import { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import '../index'
import '../index.css'
import Home from "./Home";
import Navbar from "./Navbar";
import Skill from "./Skill";
import About from "./About";
import Project from "./Project";
import More from "./More";
import Contact from "./Contact";
import Footer from "./Footer"


const Page = () => {
    useEffect(() => {
        // Init Tabs Materialize JS
        let scrollspy = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(scrollspy);
    }, []);

    return (<>

        <Home />
        <Navbar />
        <About />
        <Skill />
        <Project />
        <More />
        <Contact />
        <Footer />

    </>
    );
};

export default Page;