import React, { Fragment } from "react";
import "../../src/css/LandingPage.css";
import { Icon } from "semantic-ui-react";
import { Link } from "react-scroll";
import AboutPage from "./AboutPage";
import { Link } from "react-router-dom";


class LandingPage extends React.Component {
    render() {
  return (
    <body>
      <div id="LandingPage">
        <div className="lp-container">
          <div className="lp-title">CITY RESOURCES</div>

          <div className="lp-nav">
            <Link className="lp-link" to="AboutPage" spy={true} duration={500}>
              ABOUT
            </Link>
            <Link className="lp-link" to="Contact" spy={true} duration={500}>
            <Link to="/contact">CONTACT</Link>
            </Link>
          </div>
          <div className="lp-flex-container">
            <div>
              <Icon>
                <a href=" ">
                  <button type="button" class="searchDirectoryBtn">
                    <p className="searchText">
                    <Link to="/directory">SEARCH DIRECTORY</Link>
                      <ion-icon
                        class="chevIconSearch"
                        name="chevron-forward-outline"
                      ></ion-icon>
                    </p>
                  </button>
                </a>
              </Icon>
            </div>

            <div>
              <Icon>
                <a href=" ">
                  <button type="button" class="emergencyLinesBtn">
                    <p className="emergencyText">
                    <Link to="/emergency">EMERGENCY AND CRISIS LINES</Link>
                      <ion-icon className="phone" name="call"></ion-icon>
                    </p>
                  </button>
                </a>
              </Icon>
            </div>
          </div>
        </div></div>
        <div>
        <AboutPage/>
      </div>
      </body>
    );
  }
}

export default LandingPage;
