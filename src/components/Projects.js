import { Tab } from "react-bootstrap";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp.png";

function Projects() {
  const projects = [
    {
      title: "ToDo List",
      description: "Web Development",
      imgUrl: "projImg1",
    },
    {
      title: "ToDo List",
      description: "Web Development",
      imgUrl: "projImg2",
    },
    {
      title: "ToDo List",
      description: "Web Development",
      imgUrl: "projImg3",
    },
    {
      title: "ToDo List",
      description: "Web Development",
      imgUrl: "projImg4",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.{" "}
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first"> Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> TabTwo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" disabled>
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                  <Tab.Pane eventKey="first">
                      <Row>
                          {
                              projects.map((project,index)=>{
                                  return(
                                      <ProjectCard key={index} {...project} />
                                  )
                              })
                          }
                      </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                  <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt="img"/>
    </section>
  );
}

export default Projects;
