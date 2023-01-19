import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_97wcp3e",
      "template_jgm8wx7",
      form.current,
      "user_IbV9Wv0IEdRQgvhszY1uE"
    );
    e.target.reset();
    window.alert('You made it ✔');


  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me </span>
      
      {/* talk me -- Write me  */}
      <div className="contact__container container grid">

        {/* Talk To me */}
        <div className="contact__content">
          <h3 className="contact__title">Talk To me</h3>

          {/* Linkedin */}
          <div className="contact__info">
            <div className="contact__card">
              <BsLinkedin className="icon"></BsLinkedin>
              <h3 className="contact__card-title">Linkedin </h3>
              <span className="contact__card-data">Halil Goksu</span>
              <a href="https://www.linkedin.com/in/halil-goksu-b05b86236/" className="contact__button">
                Add
              </a>
            </div>
          </div>

          {/* Github */}
          <div className="contact__info">
            <div className="contact__card">
              <BsGithub className="icon"></BsGithub>{" "}
              <h3 className="contact__card-title">Github </h3>
              <span className="contact__card-data">halilgoksu</span>
              <a href="https://github.com/halilgoksu" className="contact__button">
                Check
              </a>
            </div>
          </div>

          {/* E mail  */}
          <div className="contact__info">
            <div className="contact__card">
              <AiTwotoneMail className="icon"></AiTwotoneMail>
              <h3 className="contact__card-title">Email </h3>
              <span className="contact__card-data">
                halilskywater@gmail.com
              </span>
              <a
                href="mailto:halilskywater@gmail.com"
                className="contact__button"
              >
                Write
              </a>
            </div>
          </div>
        </div>

        {/* Write To Me  */}
        <div className="contact__content">
          <h3 className="contact__title">Write to me</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            {/* Name */}
            <div className="contact__form-div ">
              <label className="contact__form-tag">Name</label>
              <input
                required
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name "
              />
            </div>

            {/* Mail */}
            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                required
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email "
              />
            </div>

            {/* Project */}
           
            
         
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
