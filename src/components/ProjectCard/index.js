import React from 'react'
import Card from 'react-bootstrap/Card'

const ProjectCard = (props) => {
    const {title, description, imgSrc, repoSrc, demoSrc} = props;
    return ( 
        <> 
            <Card bg='light' style={{ width: '18rem', fontSize: '1.5rem'}}>
                <Card.Img variant="top" src={imgSrc} rounded />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {description}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href={repoSrc} target='_blank'>Github Repo</Card.Link>
                    <Card.Link href={demoSrc} target='_blank'>Live Demo</Card.Link>
                </Card.Body>
            </Card> 
        </>
        )
}

export default ProjectCard