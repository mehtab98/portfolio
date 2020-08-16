import React from 'react';
import pdf from './pdf_files/MehtabRandhawa_resume.pdf';
import './resume.css';

import {Button, Card, Figure, Accordion} from 'react-bootstrap'; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import BackGraph from './graph/graph_backend';
import Graph from './graph/graph';
import 'react-vertical-timeline-component/style.min.css';

const Resume = () => {
    return(
        <>
       
        <header className="header1">     
            <img className="background_pic" src={require("../images/attempt.jpg")}  alt="fog over the bay"/>
            <div class="hero_text_net_t">
            </div>
        </header> 
        <h1 className="resume_title">Resume</h1>
        <body className="resume_body"> 
            <div className="containter">
                
                <p className="form_style">Recent 2020 graduate that received a B.S. in Computer Science. Looking for a development role in either front-end or back-end development. Have firsthand experience in Full-Stack web development and currently work as a freelance web developer. Firsthand experience in developing microservices, creating data models, and developing REST APIs in Node.JS. Have work experience in developing with a variety of JavaScript Frameworks. Have a vast technical background in Imperative Programming and Algorithm Analysis. Good comprehension of Object Oriented Programming concepts and design patterns. Know how to deploy services in IBM Bluemix, Heroku, and AWS. Familiarity with pulling and pushing code to GIT repositories. With experience working in an Agile framework and utilizing Atlassian. </p>

                <p className="form_style" >Take a more in depth look at my skillsets and gain a better understanding of technical background. Feel free to download my resume and contact me with further questions. I look forward to working with you.</p>

                <p className="form_style" >
                    <Button className="button_style" variant="dark" href={pdf}>Resume Download</Button> 
                </p>
            </div>

            <Accordion defaultActiveKey="1">
            <Card style={{width: "1200px", display:"inline-block" }}>
                <Card.Header style={{width: "1200px", display:"inline-block", outline:"black"}}>
                <Accordion.Toggle style={{marginLeft: "-1000px", color:"black"}} as={Button} variant="link" eventKey="0">
                    Education
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <h4>University of California Davis, Computer Science B.S.</h4>
                </Card.Body>
                
                </Accordion.Collapse>
            </Card>
            <Card style={{width: "1200px", display:"inline-block"}}>
                <Card.Header style={{width: "1200px", display:"inline-block", outline:"black"}}>
                <Accordion.Toggle style={{marginLeft: "-1000px", color:"black"}} as={Button} variant="link" eventKey="1">
                    Experience
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                
                    <VerticalTimeline>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="June 2018 - July 2019"
                            iconStyle={{ background: '#6C757D', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Zira Solution</h4>
                            <p>
                                Integrate twitter API, Data Visulization with Python's Matplotlib, & linear regression with Keras Library
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="May 2019 - August 2019"
                            iconStyle={{ background: 'Black', color: '#fff' }}
                            
                        >
                            <h3 className="vertical-timeline-element-title">Full-Stack Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Boon.io</h4>
                            <p>
                            Integrate third-party APIs, develop micro-services, create CRUD APIs, design data model with MongoDB, & develop front-end applications with Anuglar.JS 
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Febuary 2020 - July 2020"
                            iconStyle={{ background: '#6C757D', color: '#fff' }}
                        
                        >
                            <h3 className="vertical-timeline-element-title">Web Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Zira Solution</h4>
                            <p>
                                Redesign web applications with React's JSX, Integrate third-party APIs, & Deploy applications
                            </p>
                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card style={{width: "1200px", display:"inline-block"}}>
                <Card.Header style={{width: "1200px", display:"inline-block", outline:"black"}}>
                <Accordion.Toggle style={{marginLeft: "-970px", color:"black"}} as={Button} variant="link" eventKey="2">
                    Back-end Skills
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <div className="innerCol"> 
                        <p className="form_style"> <h4>Proficient Languages:</h4>JavaScript, Python, Java, Swift, & C++</p>
                        <p className="form_style"> <h4>Backend Frameworks: </h4>Node.JS, Django, & Swift</p>
                        <p className="form_style"> <h4>Databases:</h4>SQL (sqlite3), MS SQL Server, & NoSQL (Mongo DB)</p>
                        <p className="form_style"> <h4>Cloud Deployments:</h4>Heroku, AWS, IBM Bluemix,Github</p>
                    </div>
                    <div className="innerCol"> 
                        <BackGraph/> 
                    </div> 
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card style={{width: "1200px", display:"inline-block"}}>
                <Card.Header style={{width: "1200px", display:"inline-block", outline:"black"}}>
                <Accordion.Toggle style={{marginLeft: "-970px", color:"black"}} as={Button} variant="link" eventKey="3">
                    Front-end Skills
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                <Card.Body>
                    <div className="innerRow"> 
                    <div className="innerCol"> 
                        <p className="form_style"> <h4>Frontend Frameworks:</h4>HTML5, React, Angular, & Swift</p>
                        <p className="form_style"> <h4>Package Familarity: </h4>Redux, GraphQL, Bootstrap, & D3</p>
                        <p className="form_style"> <h4>CSS Tools:</h4>Bootstrap, UIkit, Materialize, Semantic UI, & Flexbox</p>
                    </div>
                    <div className="innerCol"> 
                        <Graph/> 
                    </div> 
                    </div>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            
        </Accordion>
        </body>

       
       
        </>
    )
}

export default Resume; 