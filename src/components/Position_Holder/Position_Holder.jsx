import React from "react";
import "./Position_Holder.scss";


const Position_Holder = () => {
    return (
        <section className="container position">
            <h2>Current Position Holder</h2>
            <div className="current">
                <div className="individual">
                    <h3>2021</h3>                    
                    <div className="coco"><h5>Co Cordinator:</h5>Anurabh Mittal</div>
                    <div className="co"><h5>Cordinator:</h5>Ayush Mishra</div>
                </div>
            </div>
            <h2>Past Position Holders</h2>
            <div className="past">
                <div className="individual">
                    <h3>2019</h3>
                    <div className="coco"><h5>Co Cordinator:</h5>Ambuj jain</div>
                    <div className="co"><h5>Cordinator:</h5>Aman Singhal</div>
                </div>
                <div className="individual">
                    <h3>2018</h3>
                    <div className="coco"><h5>Co Cordinator:</h5>Sanjay Singh Chauhan</div>
                    <div className="co"><h5>Cordinator:</h5>Shivendra Singh Pratap</div>
                </div>
                <div className="individual">
                    <h3>2017</h3>
                    <div className="coco"><h5>Co Cordinator:</h5>Harsh Srivastava</div>
                    <div className="co"><h5>Cordinator:</h5>Harsh Agarwal</div>
                </div>
                <div className="individual">
                    <h3>2016</h3>
                    <div className="coco"><h5>Co Cordinator:</h5>Harsh Agarwal</div>
                    <div className="co"><h5>Cordinator:</h5>Vipul Singh</div>
                </div>
            </div>
        </section>
    )
}
export default Position_Holder;
