import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/laptop.avif";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid rounded-circle"
              style={{ width: "430px", height: "370px" }}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Work </strong>Experience
        </h1>
        <br/>
        <br/>
        <Container>  
        <Row>
          <Col>
            <Card className="project-card-view">
            
              <Card.Body>
                <Card.Title>
                  <h4 className="purple fw-bold">Deloitte, India </h4>
                  Software Developer (Jan 2021 - Dec 2022 )
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <br />
                  <h5 className="purple">Responsibilities: </h5>
                  <ul className="list list-group">
                    <li className="list-item">
                      Collaborated with teams to develop two <span className="purple">B2C e-commerce </span>
                      platforms, covering all phases of SDLC. I translated
                      business requirements into Impex scripts, managed complex
                      data relationships, and integrated third-party payment
                      systems.
                    </li>
                    <li className="list-item">
                      Using <span className="purple">Spring MVC</span> and <span className="purple">SAP Hybris, </span> I designed robust REST
                      APIs and led the creation of an automated test suite.
                    </li>
                    <li className="list-item">
                      Optimized front-end pages with <span className="purple">React.js, </span> introduced lazy
                      loading, and improved data integrity with <span className="purple">Groovy scripts.</span>
                    </li>
                    <li className="list-item">
                    Earned coveted  <span className="purple">Applause Award </span> for exceptional contributions to two critical projects.
                    </li>
                  </ul>
                </Card.Text>
                {"\n"}
                {"\n"}

                
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card className="project-card-view">
              
              <Card.Body>
                <Card.Title>
                  <h4 className="purple fw-bold">
                    Northeastern University, Boston{" "}
                  </h4>
                  Teaching Assistant (Sep 2023 - Present )
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <br />
                  <h5 className="purple">Responsibilities: </h5>
                  <ul className="list list-group">
                    <li className="list-item">
                      Assisting <span className="purple">150+</span> students in designing TicTacToeGame within{" "}
                      <a href="https://app.covey.town/">Covey.Town</a> and
                      aiding with React, TypeScript, and Jest assignments.
                    </li>
                    <li className="list-item">
                      Engage in grading students’ assignments and conduct weekly
                      review sessions.
                    </li>
                  </ul>
                </Card.Text>
                {"\n"}
                {"\n"}

      
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        </Container> 
        <br/>
        <br/>
        <br/>
        <h1 className="project-heading">
          Skill <strong className="purple">Spectrum </strong>
        </h1>
        <br/>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        <Github />
      </Container>
    </Container>
  );
}

export default About;
