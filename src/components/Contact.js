import React from 'react';
import Resume from '../images/Resume.jpg'

function Contact () {

  //form
  const form = React.useRef(null);
  //names
  const names = React.useRef(null);
  const badName = React.useRef(null);
  //emails
  const email = React.useRef(null);
  const badEmail = React.useRef(null);
  //messages
  const messages = React.useRef(null);
  const badMessages = React.useRef(null);

  //validations
  function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  };

  const checkName = () => {
      if (!names.current.value) {
          badName.current.innerText = " Please enter a name.";
      } else {
          badName.current.innerText = "";
      };
  };

  const checkEmail = () => {
      if (!email.current.value) {
          badEmail.current.innerText = " Please enter an e-mail address.";
      }else if (!validateEmail(email.current.value) && email.current.value !== "") {
          badEmail.current.innerText = " Please enter a valid e-mail address.";
      } else {
          badEmail.current.innerText = "";
      };
  };

  const checkMessage = () => {
      if (!messages.current.value) {
          badMessages.current.innerText = " Please enter a message.";
      } else {
          badMessages.current.innerText = "";
      };
  };

  //submitForms
  const handleFormSubmit = (e) => {
          e.preventDefault();

          checkName();
          checkEmail();
          checkMessage();

          if (names.current.value !== "" && validateEmail(email.current.value) && messages.current.value !== "") {
              form.current.reset();
          }
  };

  return (  
    <div>

<section id="contact-information-section">
    <h4 id="project-header">Contact Information </h4>
    <div>
        <ul className="contactSectionCon">
            <li id="resume"> <a href={Resume}> <b>📄 Resume</b> </a> </li>
            <li id="phone number"> <b>📱 Phone number:</b> 858-216-6245</li>
            <li id="email"><b>📧 Email:</b>  <a href="Kjcortina@gmail.com"> Kjcortina@gmail.com </a></li>
        </ul>
    </div>

        <span className="headerPad" id="contactMeScroll"></span>
            <section className="cardSec" id="contactMe">
                <aside className="sideTitle">
                    <h4 id="project-header">Contact Me</h4>
                </aside>

                <div className="cardContent">
                    <form ref={form} >
                        {/* names */}
                        <label htmlFor="name"><h3>Name:</h3></label>
                        <input id="name" ref={names} onBlur={checkName} />
                        <span ref={badName}></span>
                        <br/><br/>
                        {/* emails */}
                        <label htmlFor="email"><h3>Email:</h3></label>
                        <input id="email" ref={email} onBlur={checkEmail} />
                        <span ref={badEmail}></span>
                        <br/><br/>
                        {/* messsages */}
                        <label htmlFor="message"><h3>Message:</h3></label>
                        <textarea id="message" ref={messages} onBlur={checkMessage} />
                        <span ref={badMessages}></span>
                        <br/><br/>
                        
                        <button type="button" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </section>
         </section>
    </div>

  );
}
    export default Contact;