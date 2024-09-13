import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import twitter from "../../Assets/Projects/twitter.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Twitter Simulator"
              description="Designed Twitter simulator on Spring MVC by leveraging Hibernate, reducing data retrieval latency by 50%. Enriched application with features like friend-request, posting a tweet, comments section and private messaging."
              ghLink="https://github.com/Spandana-dara/Twitter-Simulator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NU Flex Course Management "
              description="Built course management web application leveraging MERN stack and applying Http Rest APIs, achieving 98% positive feedback. Initiated robust authentication utilizing JWT and CRYPTO-JS for password hashing."
              ghLink="https://github.com/Spandana-dara/kanbas-react-web-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Student Feedback Application "
              description="Created an application for students to provide feedback on courses, college and curriculum, enabling data analysis and report generation, handling over 1000 feedback entries, benefitting over 200 students."
              ghLink="https://github.com/Spandana-dara/StudentFeedbackApplication"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Covey Town"
              description="Developed a TicTacToe game module for an existing application, allowing players to enter a dedicated gaming area and compete against others. The game also features a leaderboard to showcase top player rankings and achievements."
              ghLink="https://github.com/Spandana-dara/Covey-Town"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Image Manipulation and Enhancement"
              description="Partnered on an image processing app with both text and GUI interfaces. Supported multiple image formats like ppm, jpeg, png, and bmp. Integrated effects such as flip, brighten, and rgb-split. Built using Java and Swing, ensuring a responsive, attractive design."
              ghLink="https://github.com/Spandana-dara/ImageManipulationAndEnhancement"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Facial Emotion Recognition using CNN"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
