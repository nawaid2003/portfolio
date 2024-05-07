import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic from "../../assets/mypic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";




const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Mohammad Nawaid Sheikh </span>
                 and I'm from <span className="yellow"> Nagpur, India.</span>
                <br />
                <br />
                As a Pre-Final Year Bachelors student in BTech (CS), I am interested in cloud.
                <br />
                <br />
                  As a
                  <b className="yellow"> DevOps </b> Engineer Intern,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Python, </b>
                    as well as have knowledge in several DevOps tools like Jenkins, Docker, Kubernetes,
                  <b className="yellow"> and Git , Github .</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Cloud computing technologies,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in automation, 
                  <i>
                    <b className="yellow"> Implementing CI/CD pipelines, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Artificial Intelligence.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={pic} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/nawaid2003"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                 
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/nawaid-sheikh/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li> 
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About