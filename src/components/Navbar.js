import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from 'react';
import '../css/font.css';

function Navbar() {
  useEffect(() => {
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {
      edge: 'right',
      preventScrolling: false
    })
}, []);

  return (
    <div >
      <ul id="slide-out" className="sidenav grey lighten-1" >
        <li><div className="user-view">
          <div className="background">
            <img src="nav.jpg"></img>
          </div>
          <a href="#"><img className="circle" src="head.jpg"></img></a>
          <div style={{paddingTop:"10px", fontSize:"20px"}}>Irene Yang</div>
          <div style={{paddingBottom:"15px"}}>SI @ Umich</div>
          
        </div></li>
        <li><div className="divider"></div></li>
        <li><a className="sidenav-close grey-text text-darken-4 side-bar" href="#home"><i className="material-icons prefix nav-icon">home</i>Home</a></li>
        <li><a className="sidenav-close grey-text text-darken-4 side-bar" href="#about"><i className="material-icons prefix nav-icon">account_box</i>About</a></li>
        <li><a className="sidenav-close grey-text text-darken-4 side-bar" href="#skill"><i className="material-icons prefix nav-icon">desktop_mac</i>Skill</a></li>
        <li><a className="sidenav-close grey-text text-darken-4 side-bar" href="#project"><i className="material-icons prefix nav-icon">assignment</i>Projects</a></li>
        <li><a className="sidenav-close grey-text text-darken-4 side-bar" href="#more-info"><i className="material-icons prefix nav-icon">info</i>More Info</a></li>
        <li><a className="sidenav-close grey-text text-darken-3 side-bar" href="#contact"><i className="material-icons prefix nav-icon">email</i>Contact</a></li>
        <li><div className="divider"></div></li>
        <li><a className="subheader">A journey of a thousand miles begins with a single step</a></li>
        
      </ul>
      
      
    </div>
  )

};

export default Navbar;