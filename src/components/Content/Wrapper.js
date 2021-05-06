import React from "react";
import { Row, Col } from "antd";

const Wrapper = ({ children, notHome }) => {
  return (
    <Row
      style={
        !notHome
          ? {
              marginTop: "1vh",
              paddingLeft: "1%",
              flex: 1,
              marginLeft: "auto",
              marginRight: "auto",
            }
          : {
              display: "block",
            }
      }
    >
      <Col className={`${!notHome ? "home-text-message" : null}`}>
        {children}
      </Col>
    </Row>
  );
};

export default Wrapper;
