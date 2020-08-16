import React from 'react';

import {Figure, Accordion,Card,Button} from 'react-bootstrap'; 

import './portfolio.css';
const Portfolio = () => {
    return(
        <>
        <header className="header1">     
            <img className="background_pic" src={require("../images/UI_sketch.png")}  alt="fog over the bay"/>
            <div class="hero_text_net_t">
            </div>
        </header> 
        <h1 className="Port_title">Portfolio</h1>
        <body className="port_body"> 
        <p className="form_style"> I am delighted to share my development portfolio with you! I have highlighted web applications that I have specifically designed as a freelance web-developer or application that I developed at prior internships. You can gain more insight into my development process and see what technical technologies I utilized.I have divided my development into front-end and back-end development. </p>
        <Accordion defaultActiveKey="0">
            <Card style={{width: "1200px", display:"inline-block" }}>
                <Card.Header style={{width: "1200px", display:"inline-block", outline:"black"}}>
                <Accordion.Toggle style={{color:"black"}} as={Button} variant="link" eventKey="0">
                    Front-end Development
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <div className="containter">
                        
                        <Figure className="post_layout">
                            <iframe id="inlineFrameExample"
                            title="Inline Frame Example"
                            width="1000"
                            height="500"
                            src="http://boons.io//">
                            </iframe>
                            <Figure.Caption className="portfolio_desc">
                                At my prior internship at Boons.io, I took the time to design and deploy their company website. The website was designed to help feel user friendly while being informative on the product. The website was designed with HTML and CSS. Furthermore, I integrated Boons.io's APIs to all the company to be able to sign up new users. Google's re-captcha API was also embeded to help provide a more secure network for boons. This project was deployed with IBM's Bluemix cloud. 
                            </Figure.Caption>
                            <Figure.Caption style={{marginTop:"25px"}}>
                                <Button href="http://boons.io//" variant="secondary">Visit Website</Button>
                            </Figure.Caption>
                        </Figure>

                        <Figure className="post_layout">
                            <iframe id="inlineFrameExample"
                            title="Inline Frame Example"
                            width="1000"
                            height="500"
                            src="http://www.zirasolutions.com/">
                            </iframe>
                            <Figure.Caption className="portfolio_desc">
                                Zira Solution wanted to redesign their website from HTML into React.JS. Zira really wanted to utilize the virtual DOM technology that React encampsulates.By utilizing the DOM, React is able to compute the resulting differences, and then updates the browser's displayed efficiently. The project was redesigned with React's JSX and CSS. Bootstrap was also added to help speed up the design process. Eventually this project was deployed with Heroku's cloud platform. 
                            </Figure.Caption>
                            <Figure.Caption style={{marginTop:"25px"}}>
                                <Button href="http://www.zirasolutions.com/"variant="secondary">Visit Website </Button>
                            </Figure.Caption>
                        </Figure>

                        <Figure className="post_layout">
                            <iframe id="inlineFrameExample"
                            title="Inline Frame Example"
                            width="1000"
                            height="500"
                            src="https://ktmuldoon.shinyapps.io/featurfy-spotify-track-analysis/">
                            </iframe>
                            <Figure.Caption className="portfolio_desc">
                                Working in collaboration with Kyle Muldoon to design a dashboard for DJs to find songs that they can mix. The data is being collected and fetched from Spotify's third-party song API. Graphs are rendering with D3 and the user interphase is being designed with React.JS as a MERN stack. Project will soon be deployed online as a POC. 
                            </Figure.Caption>
                            <Figure.Caption style={{marginTop:"25px"}}>
                                <Button href="https://ktmuldoon.shinyapps.io/featurfy-spotify-track-analysis/"variant="secondary">Visit Demo</Button>
                            </Figure.Caption>
                        </Figure>
                    
                    </div>

                </Card.Body>
                
                </Accordion.Collapse>
            </Card>
            <Card style={{width: "1200px", display:"inline-block"}}>
                <Card.Header style={{width: "1200px", display:"inline-block", outline:"black"}}>
                <Accordion.Toggle style={{color:"black"}} as={Button} variant="link" eventKey="1">
                    Back-end Development
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

        </body>
        </>
    )
}

export default  Portfolio; 