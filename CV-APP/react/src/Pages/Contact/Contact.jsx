import React from 'react';
import './Contact.css';
import { DisplayMapClass } from '../../Components/DisplayMapClass/DisplayMapClass';

const Contact = () => {
    return (
        <div className="page-contact-grid">
            <div className="contact-grid">
                <div className="heading-contact">
                    <h1>CONTACT</h1>
                    <p> Republicii nr.69, Cluj-Napoca, RO</p>
                    <p> delia_humeniuc@yahoo.com</p>
                    <p> 0747847207</p>
                    <a href="https://www.linkedin.com/in/delia-maria-dănuț-humeniuc-764044135">
                        <img className="linkdln-icon" src="src/images/lnkdln.png"></img>
                    </a>

                </div>

                <div>
                    <img src="src/images/me.jpg" width="240"  height="280"></img>
                </div>
            </div>
            <DisplayMapClass />
        </div>
    )
}
export default Contact;