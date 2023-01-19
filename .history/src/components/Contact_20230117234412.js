import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="contactsection">
      <span className="section__subtitle">Contact</span>
      {/* Linkedin */}
      <div className="contact__info">
        <a
          href="https://www.linkedin.com/in/halil-goksu-b05b86236/"
          className="contact__button"
        >
          {" "}
          <BsLinkedin />
        </a>
      </div>

      {/* Github */}
      <div className="contact__info">
        <a href="https://github.com/halilgoksu" className="contact__button">
          <BsGithub className="icon"></BsGithub>{" "}
        </a>
      </div>

      {/* E mail  */}
      <div className="contact__info">
        <div className="contact__card">
          <a href="mailto:halilskywater@gmail.com" className="contact__button">
            <AiTwotoneMail className="icon"></AiTwotoneMail>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
