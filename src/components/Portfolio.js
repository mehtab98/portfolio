import React from "react";
import { DiGithub } from "react-icons/di";
import { Figure, Accordion, Card, Button } from "react-bootstrap";

import "./portfolio.css";
import { blockStatement } from "@babel/types";
const Portfolio = () => {
  return (
    <>
      <header className="header1">
        <img
          className="background_pic"
          src={require("../images/UI_sketch.png")}
          alt="fog over the bay"
        />
        <div class="hero_text_net_t"></div>
      </header>
      <h1 className="Port_title">Portfolio</h1>
      <body className="port_body">
        <p className="form_style">
          {" "}
          I am delighted to share my development portfolio with you! I have
          highlighted web applications that I have specifically designed as a
          freelance web-developer or application that I developed at prior
          internships. You can gain more insight into my development process and
          see what technical technologies I utilized.I have divided my
          development into front-end and back-end development.{" "}
        </p>
        <Accordion defaultActiveKey="0">
          <Card className="card_fit">
            <Card.Header className="card_fit_other">
              <Accordion.Toggle
                style={{ marginLeft: "-1000px", color: "black" }}
                as={Button}
                variant="link"
                eventKey="0"
              >
                Front-end Development
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="containter">
                  <Figure className="post_layout">
                    <iframe
                      id="inlineFrameExample"
                      title="Inline Frame Example"
                      className="iframe_classic"
                      src="http://boons.io//"
                    ></iframe>
                    <Figure.Caption className="portfolio_desc">
                      At my prior internship at Boons.io, I took the time to
                      design and deploy their company website. The website was
                      designed to help feel user friendly while being
                      informative on the product. The website was designed with
                      HTML and CSS. Furthermore, I integrated Boons.io's APIs to
                      all the company to be able to sign up new users. Google's
                      re-captcha API was also embeded to help provide a more
                      secure network for boons. This project was deployed with
                      IBM's Bluemix cloud.
                    </Figure.Caption>
                    <Figure.Caption className="fragment_button">
                      <Button href="http://boons.io//" variant="secondary">
                        Visit Website
                      </Button>
                    </Figure.Caption>
                  </Figure>

                  <Figure className="post_layout">
                    <iframe
                      id="inlineFrameExample"
                      title="Inline Frame Example"
                      className="iframe_classic"
                      src="http://www.zirasolutions.com/"
                    ></iframe>
                    <Figure.Caption className="portfolio_desc">
                      Zira Solution wanted to redesign their website from HTML
                      into React.JS. Zira really wanted to utilize the virtual
                      DOM technology that React encampsulates.By utilizing the
                      DOM, React is able to compute the resulting differences,
                      and then updates the browser's displayed efficiently. The
                      project was redesigned with React's JSX and CSS. Bootstrap
                      was also added to help speed up the design process.
                      Eventually this project was deployed with Heroku's cloud
                      platform.
                    </Figure.Caption>
                    <Figure.Caption className="fragment_button">
                      <Button
                        href="http://www.zirasolutions.com/"
                        variant="secondary"
                      >
                        Visit Website
                      </Button>

                      <Button
                        className="frag_button"
                        href="https://github.com/mehtab98/ziraSolution-"
                        variant="secondary"
                        style={{ marginLeft: "30px" }}
                      >
                        Github Repository <DiGithub />
                      </Button>
                    </Figure.Caption>
                  </Figure>

                  <Figure className="post_layout">
                    <iframe
                      id="inlineFrameExample"
                      title="Inline Frame Example"
                      className="iframe_classic"
                      src="https://ktmuldoon.shinyapps.io/featurfy-spotify-track-analysis/"
                    ></iframe>
                    <Figure.Caption className="portfolio_desc">
                      Working in collaboration with Kyle Muldoon to design a
                      dashboard for DJs to find songs that they can mix. The
                      data is being collected and fetched from Spotify's
                      third-party song API. Graphs are rendering with D3 and the
                      user interphase is being designed with React.JS as a MERN
                      stack. Project will soon be deployed online as a POC.
                    </Figure.Caption>
                    <Figure.Caption className="fragment_button">
                      <Button
                        href="https://ktmuldoon.shinyapps.io/featurfy-spotify-track-analysis/"
                        variant="secondary"
                      >
                        Visit Demo
                      </Button>
                      <Button
                        className="frag_button"
                        href="https://github.com/mehtab98/spotify_visualizer"
                        variant="secondary"
                        style={{ marginLeft: "30px" }}
                      >
                        Github Repository <DiGithub />
                      </Button>
                    </Figure.Caption>
                  </Figure>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card className="card_fit">
            <Card.Header className="card_fit_other">
              <Accordion.Toggle
                style={{ marginLeft: "-1000px", color: "black" }}
                className="card_outside"
                as={Button}
                variant="link"
                eventKey="1"
              >
                Back-end Development
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="containter">
                  <Figure className="post_layout">
                    <h3 className="backend_title">Uber & Jump Bike API</h3>
                    <Figure.Caption className="portfolio_desc">
                      At my prior internship at Boons.io, my first immediate
                      project was to integrate Jump Bike API & Uber's API
                      (Depricated) in Node.js. I was in charge of implementing
                      API to help find available bikes in SF area and find their
                      rates. These segments of code were part of Boon's ride
                      fare micro-service.
                    </Figure.Caption>
                    <Figure.Caption className="fragment_button">
                      <Button
                        href="https://github.com/mehtab98/Boons"
                        variant="secondary"
                      >
                        Github Repository <DiGithub />
                      </Button>
                    </Figure.Caption>
                  </Figure>

                  <Figure className="post_layout">
                    <h3 className="backend_title">Google Passport API</h3>
                    <Figure.Caption className="portfolio_desc">
                      Worked with UC Davis students to design a yearbook
                      application for UC Davis Class of 2020. Helped hackathon
                      team in integrate Google Passport API in Node.JS and
                      utilized SQLite3 database to include user functionality.
                      Included some front-end development I completed in
                      React.JS. The following github repository links you to my
                      exact contributions on the project.
                    </Figure.Caption>
                    <Figure.Caption className="fragment_button">
                      <Button
                        href="https://github.com/mehtab98/yearbook_passport/blob/master/server.js"
                        variant="secondary"
                      >
                        Github Repository <DiGithub />
                      </Button>
                    </Figure.Caption>
                  </Figure>

                  <Figure className="post_layout">
                    <h3 className="backend_title">
                      Machine Learning Assignment
                    </h3>
                    <Figure.Caption className="portfolio_desc">
                      Applying Linear regression on UC Irvines Machine Learning
                      car data set. The project was based on predicting the cars
                      gas consumption based on the cars features.Finaly python
                      scripts was able to apply linear regression with the car
                      features to predict an accurate MPG. Furthermore, I
                      designed a report which can be found in the github
                      repository with data visualization.
                    </Figure.Caption>
                    <Figure.Caption className="fragment_button">
                      <Button
                        href="https://github.com/mehtab98/LinearRegression/tree/master"
                        variant="secondary"
                      >
                        Github Repository <DiGithub />
                      </Button>
                    </Figure.Caption>
                  </Figure>
                  <Figure className="post_layout">
                    <h3 className="backend_title">Scheduler Micro-Service</h3>
                    <Figure.Caption className="portfolio_desc">
                      Designed a micro-service for boons.io to help schedule any
                      pending orders with their driver’s schedules. Designed
                      data table for the micro-service in MongoDB, and wrote a
                      variety of HTTP request that provided CRUD operations on
                      the micro-service’s data table. Deployed the micro-service
                      to POC and ran multiple test cases to confirm proper
                      functionality. The development team eventually took this
                      micro-service applied a CRON job to and deployed it into
                      production. Unfortunately code is confidential, however, I
                      can share more about this project with you.
                    </Figure.Caption>
                  </Figure>
                  <Figure className="post_layout">
                    <h3 className="backend_title">Tweepy API visualization</h3>
                    <Figure.Caption className="portfolio_desc">
                      Integrated twitter's API via Tweepy Library which gave me
                      access to analytics on Tweets, and their social media
                      exposure.I visualized the data with Matplotlib and Pandas
                      packages to apply to help provide insight into tweets.
                    </Figure.Caption>
                  </Figure>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </body>
    </>
  );
};

export default Portfolio;
