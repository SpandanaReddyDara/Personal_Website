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
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <Card className="project-card-view">
                <Card.Body>
                  <Card.Title>
                    <h4 className="purple fw-bold">QuickBase, Boston </h4>
                    Software Engineer Co-op (Present )
                  </Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    <br />
                    <h5 className="purple">Responsibilities: </h5>
                    <ul className="list list-group">
                      <li className="list-item">
                        Created <span className="purple">Image Gallery </span>
                        feature by leveraging C++, React and Fetch API to
                        retrieve images from database and implemented Lightbox
                        component with features like zoom, rotate, download and
                        maximize, enhancing image interaction.
                      </li>
                      <li className="list-item">
                        Built <span className="purple">Safety Cross </span>
                        Plugin with dynamic, color-coded calendar for daily
                        issue reporting, featuring plus-sign interface,
                        enhancing issue tracking efficiency. Spiked Redux store
                        and custom hooks for state management and reduce code
                        redundancy by <span className="purple">20%. </span>
                      </li>
                      <li className="list-item">
                        Ensured quality by performing unit testing in Jest and
                        maintained <span className="purple">{">"}95% </span>
                        code coverage of large-scale codebase.
                      </li>
                      <li className="list-item">
                        Actively participated in{" "}
                        <span className="purple">{">"}30+ </span> code reviews
                        providing feedback to optimize project outcomes.
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
                    <h4 className="purple fw-bold">ESRI, California </h4>
                    Product Engineer Intern (May 2024 - June 2024 )
                  </Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    <br />
                    <h5 className="purple">Responsibilities: </h5>
                    <ul className="list list-group">
                      <li className="list-item">
                        Optimized <span className="purple">JUnit harness </span>
                        for daily regression of{" "}
                        <span className="purple">2000+ </span> tests on ArcGIS
                        Pro by mitigating pipeline failures caused by single
                        test JVM crashes and implemented real-time failure
                        notifications with Teams Webhook integration on{" "}
                        <span className="purple">Jenkins </span>.
                      </li>
                      <li className="list-item">
                        Achieved <span className="purple">20s </span> reduction
                        in query setup time by enabling developers to create and
                        save filtered views in{" "}
                        <span className="purple">C# </span> and{" "}
                        <span className="purple">Vue.js </span> , eliminating
                        repetitive records filtering. Integrated logging of
                        developer actions for visibility into changes and
                        communication for bug resolution.
                      </li>
                      <li>
                        Developed new features using{" "}
                        <span className="purple">TypeScript </span> in Doctopia
                        Markdown, a VS Code extension used for documentation
                        creation from .md files.
                      </li>
                    </ul>
                  </Card.Text>
                  {"\n"}
                  {"\n"}
                </Card.Body>
              </Card>
            </Col>
          </Row>
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
                        Collaborated with teams to develop two{" "}
                        <span className="purple">B2C e-commerce </span>
                        platforms, covering all phases of SDLC. I translated
                        business requirements into Impex scripts, managed
                        complex data relationships, and integrated third-party
                        payment systems.
                      </li>
                      <li className="list-item">
                        Using <span className="purple">Spring MVC</span> and{" "}
                        <span className="purple">SAP Hybris, </span> I designed
                        robust REST APIs and led the creation of an automated
                        test suite.
                      </li>
                      <li className="list-item">
                        Optimized front-end pages with{" "}
                        <span className="purple">React.js, </span> introduced
                        lazy loading, and improved data integrity with{" "}
                        <span className="purple">Groovy scripts.</span>
                      </li>
                      <li className="list-item">
                        Earned coveted{" "}
                        <span className="purple">Applause Award </span> for
                        exceptional contributions to two critical projects.
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
                        Assisting <span className="purple">150+</span> students
                        in designing TicTacToeGame within{" "}
                        <a href="https://app.covey.town/">Covey.Town</a> and
                        aiding with React, TypeScript, and Jest assignments.
                      </li>
                      <li className="list-item">
                        Engage in grading students’ assignments and conduct
                        weekly review sessions.
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
        <br />
        <br />
        <br />
        <h1 className="project-heading">
          Skill <strong className="purple">Spectrum </strong>
        </h1>
        <br />

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
