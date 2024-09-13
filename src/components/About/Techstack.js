import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiAws,
  DiDocker,
} from "react-icons/di";
import {
  SiRedis,
  SiPostman,
  SiSpring,
  SiSap,
  SiJirasoftware,
  SiJunit5,
} from "react-icons/si";


import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="tech-stack-title">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <p className="tech-stack-title">Spring</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSap />
        <p className="tech-stack-title">SAP Hybris</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-stack-title">Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-stack-title">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-stack-title">NodeJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <p className="tech-stack-title">AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p className="tech-stack-title">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="tech-stack-title">Mongodb</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <p className="tech-stack-title">Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-stack-title">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-stack-title">REST Apis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
        <p className="tech-stack-title">Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJunit5 />
        <p className="tech-stack-title">JUnit</p>
      </Col>
    </Row>
  );
}

export default Techstack;
