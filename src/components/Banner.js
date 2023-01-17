import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/headerImg1.jpeg";

function Banner() {
const [loopNum, setLoopNum ] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [text, setText] = useState("");
const [delta,setDelta]= useState(300 - Math.random()* 100);
const period = 2000;
const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]


const tick =()=> {
    let i = loopNum% toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0, text.length +1);

    setText(updatedText);

    if(isDeleting){
        setDelta(prevDelta=>prevDelta/2)
    }

    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting&& updatedText === ""){
        setIsDeleting(false);
        setLoopNum(loopNum+1);
        setDelta(500);
    }
}

useEffect(()=>{
    let ticker = setInterval(()=>{
        tick();
    }, delta)

    return ()=>{clearInterval(ticker)}
},[tick]);



  return <section className="banner" id="home">
      <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={8}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi I'm Ali Agpak`} <br></br> <span className="wrap">{text}</span></h1>
                <p>I am Full-Stack Developer. I have some experience with HTML,CSS, Bootstrap, Tailwind, Javascript and React.JS. And also I worked in Clarusway as Mentor in Front-End Development</p>
                <Nav.Link href="#connect" ><button onClick={()=>console.log("connect")}>Contact Me<ArrowRightCircle size={25}/></button>
                </Nav.Link>
            </Col>
            <Col xs={12} md={6} xl={4}>
                <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
      </Container>

  </section>;
}

export default Banner;
