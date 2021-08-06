import React from "react";
import {Button} from "react-bootstrap";
import "./Landing.scss";
import robotImage from "./robot.webp";

const Landing = () => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-lg-6 entry">
                    <h1>Everyone wants innovation through <span>ROBOTICS</span></h1>
                    <h4>Don't mess with us. We've got<span> Robots</span></h4>
                    <p>"Robots are interesting because they exist as a real technology
                        that you can really study - you can get a degree in robotics -
                        and they also have all this pop-culture real estate that they
                        take up in people's minds." -Daniel H. Wilson</p>
                    <Button className="btn btn-lg rounded-pill tourBtn">Take a tour</Button>
                </div>

                <div className="col-lg-6 entryImg">
                    <img className="title-image" id = "robot" src={robotImage} alt="robot"/>
                </div>

            </div>
        </div>
    );
}
export default Landing;