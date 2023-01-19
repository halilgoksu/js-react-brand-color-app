import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
  
  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Contact Me </span>
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
    </section>
  );
};

export default Contact;
