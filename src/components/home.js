import React from "react";
import "./home.css";
import { Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="headerStyle">
        <img
          className="img_1"
          src={require("../images/header.jpg")}
          alt="About me"
        />
        <div className="hero_text">
          <h1 className="header_text">
            Development Designed For The Digital World.
            <Button
              className="buttonVisible"
              href="#home_section"
              style={{ color: "white" }}
              variant="outline-secondary"
            >
              More about me
            </Button>
          </h1>
        </div>
      </header>

      <body className="body_style">
        <h1 className="home_title">Who's this guy?</h1>
        <p className="form_style">
          I am a freelance web developer in Livermore, California. As a recent
          college graduate, I posess the skillsets of a Full-Stack developer.
          However, I have a speciality in front-end development with React.JS
          and other Javascript Frameworks. I have serious passion for UI
          effects, animations, and creating a intuitive user experience. I am
          allways motivated in creating responsive & dynamic web applications. I
          enjoy partnering with global brands and emerging businesses to create
          a meaningful experiences on digital platforms.
        </p>

        <p id="home_section" className="form_style">
          I have hands on experience in back-end development with Node.JS. I
          understand how to develop microservices, create data models, integrate
          third-party APIs, and developing REST APIs. I am fluent in both SQL
          and noSQL query languages. My vast technical background in Object
          Oriented Programming and Algorithm Analysis make it easy for me to
          develop optimized web applications. Take a look at my portfolio,
          background, and feel free to contanct me.
        </p>
        <div className="card_wrap">
          <div className="card_style">
            <Link to="/resume" className="link_style">
              <Card
                className="cards"
                style={{ width: "16rem", height: "10rem" }}
              >
                <Card.Body>
                  <Card.Title>Resume</Card.Title>
                  <Card.Text>
                    Learn more about my background, skills, and download my
                    resume.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            <Link to="/portfolio" className="link_style">
              <Card
                className="cards"
                style={{ width: "16rem", height: "10rem" }}
              >
                <Card.Body>
                  <Card.Title>Portfolio</Card.Title>
                  <Card.Text>
                    See what I have developed in the past for exisiting
                    businesses and see some of my passion projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            <Link to="/contact" className="link_style">
              <Card
                className="cards"
                style={{ width: "16rem", height: "10rem" }}
              >
                <Card.Body>
                  <Card.Title>Contact</Card.Title>
                  <Card.Text>
                    Gain access to my contact information & contact me directly
                    via email.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
