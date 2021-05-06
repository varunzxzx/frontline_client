import React from "react";
import Wrapper from "./Wrapper";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

const Appeals = () => (
  <Wrapper>
    <div>
      <center>
        <h1>Appeals for Support</h1>
      </center>
      <p>
        The Government of Karnataka has systematically strengthened all
        surveillance and containment measures against the possible spread of the
        second wave of COVID-19. However, since the State is functioning at its
        full capacity now, we request NGOs and corporates to step in and support
        to help assuage the situation. Below are the detailed documents related
        to the appeals. For more information, or to support please do get in
        touch with us&nbsp;
        <a href="mailto:karnatakafightscorona@gmail.com">
          karnatakafightscorona@gmail.com
        </a>
      </p>
      <hr />
      <h3>Import Application </h3>
      <p>
        Incase your entity/organization is planning on importing the required
        good from other countries, please click on the below button to know more
        details.
        <Row>
          <Col
            lg={24}
            sm={24}
            xs={24}
            className="bottom-btn-containers-alt home-actions"
            style={{ border: "0" }}
          >
            <Link to="/import-authorization">
              <div className="goto-text">
                <Button className="action-btn">Import Details</Button>
              </div>
            </Link>
          </Col>
        </Row>
      </p>
      <hr />
      <h3>Related Appeal Documents</h3>
      <p>
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1Ct1kfQENmG6OGapJw1Ztux_SsBLWn105#grid"
          style={{ width: "100%", height: "400px", border: "0" }}
        ></iframe>
      </p>
    </div>
  </Wrapper>
);

export default Appeals;
