import React from "react";
import "./Team.scss";

import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img1 from "./img/1.webp";
import img2 from "./img/2.webp";
import img3 from "./img/3.webp";
import img4 from "./img/4.webp";
import img5 from "./img/5.webp";
import img6 from "./img/6.webp";
import img7 from "./img/7.webp";
import img8 from "./img/8.webp";
import img9 from "./img/9.webp";
import img10 from "./img/10.webp";
import img11 from "./img/11.webp";
import img12 from "./img/12.webp";
import img13 from "./img/13.webp";


const Team = () => {
    return (
        <div className="container">
            <h1 className="fic">Team FIC</h1>
            <div className="row">
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Dr. Tanuja Sheorey</h3>
                            <p>Faculty Incharge</p>
                        </div>
                        <img src={img11} alt="robo" />
                    </div>
                </div>
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Dr. Ravi Panwar</h3>
                            <p>Faculty Incharge</p>
                        </div>
                        <img src={img13} alt="robo" />
                    </div>
                </div>
            </div>
            <hr />
            <h1 className="student">Team Students</h1>
            <div className="row">
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Ayush Mishra</h3>
                            <p>Coordinator</p>
                            <div>
                                <a href="https://www.linkedin.com/in/ayush-mishra-a71688127/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://youtube.com/channel/UCPY8rVtrR8cCqb3jmMtek4w" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>
                        <img src={img5} alt="robo" />
                    </div>
                </div>
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Arunabh Mittal</h3>
                            <p>Co Coordinator</p>
                            <div>
                                <a href="https://www.linkedin.com/in/arunabh-mittal-96185a193/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://www.instagram.com/bazinga._.forever/" target="_blank" ><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>

                        </div>
                        <img src={img3} alt="robo" />
                    </div>
                </div>
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Rajat Kumar</h3>
                            <p>Project Manager</p>
                            <div>
                                <a href="https://www.linkedin.com/in/rajat-kumar-66466a193/" target="_blank" ><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://www.instagram.com/rajat23101/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>

                        </div>
                        <img src={img8} alt="robo" />
                    </div>
                </div>
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Ayush Kumar</h3>
                            <p>Mesh Analyzer</p>
                            <div>
                                <a href="https://www.linkedin.com/in/ayush-kumar-157628207" target="_blank" class="box"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://www.instagram.com/ayushk0806/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>

                        </div>
                        <img src={img4} alt="robo" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Arihant Jain</h3>
                            <p>Mesh Analyzer</p>
                            <div>
                                <a href="https://in.linkedin.com/in/arihant-jain-09" target="_blank" class="box"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://www.instagram.com/arihant_jain_09/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>

                        </div>
                        <img src={img2} alt="robo" />
                    </div>
                </div>
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Somya Prajapati</h3>
                            <p>Developer</p>
                            <div>
                                <a href="https://www.linkedin.com/in/somya51p/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://www.instagram.com/_somya2001p_" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>

                        </div>
                        <img src={img10} alt="robo" />
                    </div>
                </div>
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Anurag Vij</h3>
                            <p>CAD Expert</p>
                            <div>
                                <a href="http://www.linkedin.com/in/anurag-vij-2b259a207" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://www.instagram.com/anuragvij56/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>

                        </div>
                        <img src={img12} alt="robo" />
                    </div>
                </div>
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Abhishek Yadav</h3>
                            <p>Quantum Neoretic</p>
                            <div>
                                <a href="https://www.linkedin.com/in/abhishek-yadav-765672198" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://www.instagram.com/invites/contact/?i=1naumwdbbt1j7&amp;utm_content=6qhrdxs" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>

                        </div>
                        <img src={img1} alt="robo" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Priyansh Nama</h3>
                            <p>Coding Ninja</p>
                            <div>
                                <a href="https://www.linkedin.com/in/priyanshnama/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://www.instagram.com/priyanshnama/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>

                        </div>
                        <img src={img7} alt="robo" />
                    </div>
                </div>
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Shivam Sourav Jha</h3>
                            <p>Coding Ninja</p>
                            <div>
                                <a href="https://www.linkedin.com/in/shivamsouravjha" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href="https://instagram.com/shivamsouravjha?utm_medium=copy_link" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>

                        </div>
                        <img src={img9} alt="robo" />
                    </div>
                </div>
                <div className="tmp">
                    <div className="col-md-3">
                        <div className="infonew">
                            <h3>Parv Yadav</h3>
                            <p>Digital Manager</p>
                            <div>
                                <a href=" https://www.linkedin.com/in/parv-yadav-b54480193/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>

                        </div>
                        <img src={img6} alt="robo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Team;
