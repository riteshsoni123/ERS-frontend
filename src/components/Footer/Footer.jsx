import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.scss";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footercontainer">
      <footer>
        <div className="footerrow">
          <div className="footercol-11">
            <div className="footerrow ">
              <div className="footercol-md-3">
                <h4 className=" bold-text">
                  <strong>
                    <b>You can trust us.</b>
                  </strong>
                  <br></br>
                  <br></br>Get in Touch.
                </h4>
              </div>

              <div className="footercol-md-3">
                <h4 className=" bold-text ">
                  <b>Top Projects</b>
                </h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.instagram.com/p/CGb8jvGJywb/?utm_source=ig_web_copy_link">
                      The Crab
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/p/CF3rdTMJt8U/?utm_source=ig_web_copy_link">
                      Motion Sync Robot
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/p/CFrOwtbpz6d/?utm_source=ig_web_copy_link">
                      Flame Thrower
                    </a>
                  </li>
                  <li>E Yantra</li>
                  <li>Racing Emulator</li>
                </ul>
              </div>
              <div className="footercol-md-3">
                <h5 className="bold-text">
                  <b>Address</b>
                </h5>
                <h6>
                  Airport Rd,PDPM IIITDM Jabalpur Campus,Khamaria,Jabalpur
                </h6>
                <h6>Madhya Pradesh 482005</h6>
              </div>
            </div>
            <div className="footerrow">
              <div>
                <a
                  href="https://www.facebook.com/robotics.iiitdmj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://youtube.com/channel/UCPY8rVtrR8cCqb3jmMtek4w"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://instagram.com/robotics_iiitdmj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/robotics-club-iiitdmj/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <strong>Copyright {currentYear} All rights reserved.</strong>
              </div>

              <div className="footer-col-md-3">
                <h6>
                  <b>Arunabh Mittal</b>
                </h6>
                <small>
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  2019215@iiitdmj.ac.in
                </small>
              </div>
              <div className="footercol-md-3">
                <h6>Made with ❤</h6>
                <h6>
                  <b>Send Message</b>
                </h6>
                <button>
                  Send<i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
