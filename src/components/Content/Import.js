import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

import { Row, Col, Button } from "antd";

const Import = () => (
  <Wrapper>
    <div>
      <center>
        <h1>Import Authorization</h1>
      </center>
      <p>
        Primary requirement as per exemption order:
        <ul>
          <li>
            Goods notified vide Notification No. 27/2021-Customs, dated 20th
            April, 2021 and Notification No. 28/2021-Customs, dated 24th April,
            2021 covered within the scope of exemption order
          </li>
          <li>
            The said goods are imported free of cost for the purpose of Covid
            relief by a State Government or, any entity, relief agency or
            statutory body, authorised in this regard by any State Government.
          </li>
          <li>
            The said goods are received from abroad for free distribution in
            India for the purpose of Covid relief.
          </li>
          <li>
            Before clearance of the goods, the importer produces before the
            custom authority a certificate from a nodal authority, appointed by
            a State Government, that the imported goods are meant for free
            distribution for Covid relief.
          </li>
          <li>
            The importer produces before the custom authority, at the port of
            import within a period of six months from the date of importation,
            or within such extended period not exceeding nine months from the
            said date as that Deputy or Assistant Commissioner of Customs may
            allow, a statement containing details of goods distributed free of
            cost duly certified by the said nodal authority of the State
            Government.
          </li>
        </ul>
        <br></br>
        <hr />
        Ensure you have the key documents listed in ANNEXURE-A and the Signed
        Self Declaration form (template available below), and then fill-out and
        submit the application form. You will have to e-mail the required
        documents to:&nbsp;
        <a href="mailto:importnodal.kar@gmail.com">importnodal.kar@gmail.com</a>
        , also can use the same email-id for any queries or clarifications.
        <Row>
          <Col
            lg={24}
            sm={24}
            xs={24}
            className="bottom-btn-containers-alt home-actions"
            style={{ border: "0" }}
          >
            <Link to="/import-authorization-form">
              <div className="goto-text">
                <Button className="action-btn">Import Application Form</Button>
              </div>
            </Link>
          </Col>
        </Row>
        <br />
      </p>
      <hr />
      <h3>Related Documents</h3>
      <p>
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1X8a-CFCfAooMdytfp5nXI6I7fJ9N0wWF#grid"
          style={{ width: "100%", height: "400px", border: "0" }}
        ></iframe>
      </p>
    </div>
  </Wrapper>
);

export default Import;
