import React from "react";
import "./Event.scss";
import img1 from "./images/4.webp";
import img2 from "./images/20.webp";
import img3 from "./images/21.webp";
import img4 from "./images/22.webp";


const Event = () => {
    return (
        <section className="container">
            <h2 className="event-heading">Events</h2>
            <div className="event-section">
                <div className="event-card">
                    <div className="event-box">
                        <div className="event-image">
                            <img src={img2} alt="robo" />
                        </div>
                        <h3>ROBOTHON</h3>
                    </div>
                </div>
                <div className="event-card">
                    <div className="event-box">
                        <div className="event-image">
                            <img src={img3} alt="robo" />
                        </div>
                        <h3>ROBOSOCCER</h3>
                    </div>
                </div>
                <div className="event-card">
                    <div className="event-box">
                        <div className="event-image">
                            <img src={img4} alt="robo" />
                        </div>
                        <h3>ROBOWAR</h3>
                    </div>
                </div>
                <div className="event-card">
                    <div className="event-box">
                        <div className="event-image">
                            <img src={img1} alt="robo" />
                        </div>
                        <h3>LFR</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Event;
