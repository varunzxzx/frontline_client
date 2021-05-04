import React, { useState } from "react";
import { Row } from "antd";

import PaymentModal from "./PaymentModal";
import VolunteerModal from "./VolunteerModal";
import CTA from "./CTA";

const Actions = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVolunteerModal, setshowVolunteerModal] = useState(false);

  return (
    <Row>
      <div className="home-actions">
        <PaymentModal showModal={showModal} setShowModal={setShowModal} />
        <VolunteerModal
          showModal={showVolunteerModal}
          setShowModal={setshowVolunteerModal}
        />
        <CTA showModal={showModal} setShowModal={setShowModal} />
      </div>
    </Row>
  );
};

export default Actions;
