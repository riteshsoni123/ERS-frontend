import React from "react";
import "./About.scss";
import robo from "./robo.webp";


const About = () => {
    return (
        <section id="about" className="about container-fluid">
            <div className="title container">
                <h2>About US</h2>
                <div className="row">
                    <div className="col-lg-6 col-10 mx-auto">
                        <figure className="about_hero__img">
                            <img className="animate-robo" src={robo} alt="robo" />
                        </figure>
                    </div>
                    <div className="col-lg-6 col-10 mx-auto">
                        <div className="about_hero__text">
                            <h4>The Robotics Club of IIITDM Jabalpur is a fraternity, not just a group but a faction of such students
                                whose passions dwell in beholding wires and metal beget a machine that has a brain of its own.<br /><br />
                                It's here, that seeds of lecturing are sown by those experienced and erudite, nurtured by the
                                interested
                                and novice , pruned by minute yet unprecedented errors and harvested in competitions all over India.
                                The
                                Club offers indispensible guidance, workshops and tutorials along with tools, equipments, components
                                and
                                workspace. The family meets periodically to discuss over matters such as the management of the
                                workspace,
                                workshops, projects and competitions. We welcome anyone, with or without prior knowledge, who wishes
                                to be
                                a part of this fraternity. There are no pre-requisites to join because we have members that believe
                                in the
                                transfer of knowledge, especially that which concerns our precious interest in Robotics..
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;