import React from "react";

import "./footer.css";

import { Link } from "react-router-dom";

import { DiGithub } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";

function website_footer() {
  return (
    <>
      <footer class="footer_styles">
        <div class="bottom-contain">
          <section class="newsletter">
            <footer className="footer_style">
              <div className="footer_row">
                <div className="footer_column">
                  <h4 className="handle_text">Contact Information</h4>
                  <p className="handle_text">Livermore, California</p>
                  <p className="handle_text">mrandhawa@ucdavis.edu</p>
                  <p className="handle_text"> TEL: (925) 303-0084</p>
                </div>

                <div className="footer_column">
                  <h4 className="handle_text_r">Quick Links</h4>
                  <ul className="footer_links">
                    <li className="link_stylez">
                      {" "}
                      <a
                        href="https://github.com/mehtab98"
                        className="link_stylez"
                      >
                        Github
                      </a>
                      <DiGithub />
                    </li>

                    <li className="link_stylez">
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/mehtab-randhawa-a83786177"
                        className="link_stylez"
                      >
                        Linkedin
                      </a>{" "}
                      <FaLinkedinIn />
                    </li>

                    <Link to="/resume">
                      <li className="link_stylez">Resume</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </footer>
    </>
  );
}

export default website_footer;
