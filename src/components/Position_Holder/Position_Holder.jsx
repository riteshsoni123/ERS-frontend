import React from "react";
import "./Position_Holder.scss";

const Position_Holder = () => {
  return (
    <section className="container position" id="whatsNew">
      <h2>Current Position Holder</h2>
      <div className="current">
        <div className="individual">
          <h3>2021</h3>
          <div className="hidden">
            <div className="coco">
              <div className>Co Cordinator:</div><div className>Anurabh Mittal</div>
            </div>
            <div className="co">
              <div>Cordinator:</div><div>Ayush Mishra</div>
            </div>
          </div>
        </div>
      </div>
      <h2>Past Position Holders</h2>
      <div className="past">
        <div className="individual">
          <h3>2019</h3>
          <div className="hidden">
            <div className="coco">
              <div>Co Cordinator:</div><div>Ambuj jain</div>
            </div>
            <div className="co">
              <div>Cordinator:</div><div>Aman Singhal</div>
            </div>
          </div>
        </div>
        <div className="individual">
          <h3>2018</h3>
          <div className="hidden">
            <div className="coco">
              <div>Co Cordinator:</div><div>Sanjay Singh Chauhan</div>
            </div>
            <div className="co">
              <div>Cordinator:</div><div>Shivendra Singh Pratap</div>
            </div>
          </div>
        </div>
        <div className="individual">
          <h3>2017</h3>
          <div className="hidden">
            <div className="coco">
              <div>Co Cordinator:</div><div>Harsh Srivastava</div>
              <h5></h5>
            </div>
            <div className="co">
              <div>Cordinator:</div><div>Harsh Agarwal</div>
            </div>
          </div>
        </div>
        <div className="individual">
          <h3>2016</h3>
          <div className="hidden">
            <div className="coco">
              <div>Co Cordinator:</div><div>Harsh Agarwal</div>
            </div>
            <div className="co">
              <div>Cordinator:</div><div>Vipul Singh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Position_Holder;
