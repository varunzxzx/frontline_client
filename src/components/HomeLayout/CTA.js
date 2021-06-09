import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button } from "antd";

import donateIco from "@images/Donate@10x.png";
import resourceIco from "@images/Resource@10x.png";
import supportIco from "@images/Support@10x.png";
import volunteerIco from "@images/Volunteer@10x.png";

function CTA(props) {
  return (
    <>
      <Row>
        <Col lg={12} sm={24} xs={24} className="bottom-btn-containers">
          <div className="goto-text" onClick={() => props.setShowModal(true)}>
            <Button className="action-btn">
              <img className="action-img" src={donateIco} />
              DONATE
            </Button>
          </div>
        </Col>

        <Col lg={12} sm={24} xs={24} className="bottom-btn-containers-alt">
          <Link to="/appeals">
            <div className="goto-text">
              <Button className="action-btn">
                <img className="action-img" src={supportIco} />
                SUPPORT
              </Button>
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col lg={12} sm={24} xs={24} className="bottom-btn-containers">
          <Link to="/volunteer">
            <div className="goto-text">
              <Button className="action-btn">
                <img className="action-img" src={volunteerIco} />
                VOLUNTEER
              </Button>
            </div>
          </Link>
        </Col>
        <Col lg={12} sm={24} xs={24} className="bottom-btn-containers-alt">
          <Link to="/information-center/citizen-resource-finder">
            <div className="goto-text">
              <Button className="action-btn">
                <img className="action-img" src={resourceIco} />
                INFORMATION CENTER
              </Button>
            </div>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default CTA;
