import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard({title, description, imgUrl,hRef}) {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <a href={hRef}><img src={imgUrl} alt="img"/>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
            </a>
        </div>

    </Col>
    )
}

export default ProjectCard