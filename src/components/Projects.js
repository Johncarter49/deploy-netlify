import { Tab } from "react-bootstrap";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
// import colorSharp from "../assets/img/color-sharp.png";
import projImg1 from "../assets/img/first-project.png"
import projImg2 from "../assets/img/portfolio.png";
import colorSharp4 from "../assets/img/colorSharp4.gif"
function Projects() {
  const projects = [
    {
      title: "ToDo List",
      description: "Web Development",
      imgUrl: projImg1,
      hRef: "https://johncarter49.github.io/language_cards/" 
    },
    {
      title: "Portfolio",
      description: "Web Development",
      imgUrl: projImg2,
      hRef: "https://master--agpak-second.netlify.app/" 
    },
    {
      title: "Calculator",
      description: "Web Development",
      imgUrl: "projImg3",
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
              dolores et ea rebum.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center " id="pills-tab">
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
      <img className="background-image-right" src={colorSharp4} alt="img"/>
    </section>
  );
}

export default Projects;
