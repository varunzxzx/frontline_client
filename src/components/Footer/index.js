import React from "react";
import { Row, Col } from "antd";
import { contact } from "@utils/constants";

import {
  WhatsAppOutlined,
  MailOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Footer = (props) => {
  const style = {};
  if (!props.noBackground) {
    const backgrondColor = props.backgrondColor
      ? props.backgrondColor
      : "#1d1e22";
    style.backgroundColor = backgrondColor;
  }
  return (
    <>
      <Row style={style} className="footer-container">
        <Col
          span={4}
          style={{ paddingLeft: 5, paddingRight: 3 }}
          className="border-right flex-center"
        >
          <div
            style={{
              fontSize: "1em",
              color: "snow",
              display: "inline-block",
              wordBreak: "break-word",
            }}
          >
            Get Involved
          </div>
        </Col>

        <Col span={20} className="footer-cell">
          <Row className="footer-box">
            <Col offset={1}>
              <span className="footer-icon">
                <WhatsAppOutlined />
              </span>
              {contact.whatsapp.map((x) => (
                <span className="footer-item-wrap" key={x}>
                  {x}
                </span>
              ))}
            </Col>
            <Col offset={1}>
              <span className="footer-icon">
                <MailOutlined />
              </span>
              {contact.email.map((x) => (
                <span className="footer-item-wrap" key={x}>
                  <a href={`mailto:${x}`} style={{ color: "snow" }}>
                    {x}
                  </a>
                </span>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <div style={{ textAlign: "center", backgroundColor: "rgb(29, 30, 34)" }}>
        <a
          className="alt"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/varunzxzx/frontline_client"
        >
          Developed by Volunteers, SPYKK App Labs &amp; SAP Labs India, hosted
          by IIIT-B | Open sourced <GithubOutlined />
        </a>
      </div>
    </>
  );
};

export default Footer;
