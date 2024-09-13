import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {FaAws} from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple">Spandana </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br /> I am pursuing my Master's in <span className="purple">Computer Science </span> at 
            <span className="purple"> Northeastern University, Boston. </span>
            <br/>
            <br/>
            🚀 Blasting off into 2024 with a mission in sight! 
            I'm on the hunt for an <span className="purple">SDE Internship or Co-op opportunity </span>starting January 2024. 
            <br />
            <br />
            <FaAws style={{fontSize:'30px'}}/> <span className="purple">  AWS Certified </span>  Cloud Practitioner <br/><br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Puzzle Solving
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Blogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
