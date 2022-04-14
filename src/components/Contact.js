import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect, useState, useRef } from "react";
import '../css/font.css';
import '../index.css'

function Contact() {
    
    const form = useRef();
    const [data, updateData] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [confirmMsg, setConfirmMsg] = useState(false);

    useEffect(()=>{
        setEmail("")
        setName("")
        setMessage("")
    }, [])

    useEffect(() => {
        let scrollspy = document.querySelectorAll(".scrollspy");
        M.ScrollSpy.init(scrollspy);
    }, []);

    const handleChange = (e) => {
        updateData({
            ...data,
            [e.target.name]: e.target.value

        });
        if (e.target.name === "name"){
            setName(e.target.value);
        }else if(e.target.name === "email"){
            setEmail(e.target.value);
        }else{
            setMessage(e.target.value);
        }
    };

    
    const showConfirmMsg = (e) => {
        e.preventDefault()
        if (setAlert()){
            setConfirmMsg(true);
        }
    };

    const setAlert = ()=>{
        if (data['name'] === "" | data['name'] === undefined){
            alert("Please fill in the name.")
        }else if(data['email'] === "" | data['email'] === undefined){
            alert("Please fill in the email.")
        }else if(data['message'] === "" | data['message'] === undefined){
            alert("Please fill in the message.")
        }else{
            return true
        }
    }
    // post the submit to forspree
    const AfterConfirm = (e) => {
        e.preventDefault()
        if (setAlert) {
            form.current.submit();
        }
    };
   

    
    return (
        <>

            <section className="section experience grey lighten-5 section-contact grey-text text-darken-2 scrollspy" id="contact">
                <div className="container center">
                    <h3>Contact Me!</h3>
                    <h6>Let's start a conversation!</h6>
                    <div className="row">
                        <form action="https://formspree.io/f/xvolwpob" ref={form} onSubmit={showConfirmMsg} method="POST">
                            <div className="row">
                                <div className="col s12 m6 input-field ">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input type="text" id="name" name="name" className="validate" required onChange={handleChange} value={name}></input>
                                    <label htmlFor="name">Name</label>
                                    <span className="helper-text" data-error="Please provide your name"></span>
                                </div>
                                <div className=" col s12 m6 input-field">
                                    <i className="material-icons prefix">email</i>
                                    <input type="email" id="email" name="email" className="validate" required onChange={handleChange} value={email}></input>
                                    <label htmlFor="email">Email</label>
                                    <span className="helper-text" data-error="Please provide your email"></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className=" col s12 input-field">
                                    <i className="material-icons prefix">message</i>
                                    <input type="text" id="message" name="message" className="materialize-textarea validate" required onChange={handleChange} value={message}></input>
                                    <label htmlFor="message">Message</label>
                                    <span className="helper-text" data-error="Please leave a message"></span>
                                </div>
                            </div>
                            <div className="row center">
                                <button className="btn waves-effect waves-light orange accent-2" onClick={showConfirmMsg}>Submit
                                    <i className="material-icons right">drafts</i>
                                </button>
                                {confirmMsg && (
                                    <div>
                                        <br /> <h6> Are you sure want to submit? </h6> <br />
                                        <button className="btn grey darken-1" style={{ marginLeft: "5px" }} onClick={AfterConfirm}>Yes</button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )

};

export default Contact;