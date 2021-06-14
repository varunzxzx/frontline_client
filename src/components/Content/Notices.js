import React from "react";
import Wrapper from "./Wrapper";
// eslint-disable-next-line no-unused-vars
import { awarenessMaterial } from "@utils/constants";

import "../../styles/awareness.less";

// import { Table } from "antd";

// const columns = [
//   {
//     title: "Date",
//     dataIndex: "date",
//     key: "date",
//     sorter: (a, b) => new Date(a.date) - new Date(b.date),
//     defaultSortOrder: "descend",
//   },
//   {
//     title: "Description",
//     dataIndex: "description",
//     key: "description",
//   },
//   {
//     title: "Document",
//     dataIndex: "document",
//     key: "document",
//     render: (text) => (
//       <a href={text} target="_new">
//         View
//       </a>
//     ),
//   },
// ];

// const data = [
//   {
//     date: "24-Jun-2020",
//     description: "Donations made by all organizations",
//     document:
//       "https://drive.google.com/file/d/1keNkLiGJxQ-ahd03mU4_WOMONBQpSkWt/view?usp=drivesdk",
//   },
// ];

const Notices = () => (
  <Wrapper>
    <div>
      <center>
        <h1>Awareness Material</h1>
      </center>
      <p>
        We are curating and constantly creating new material to promote COVID
        Awareness, Vaccination, COVID Appropriate Behaviour (CAB), Mental Health
        Awareness and a lot more in the following languages. Please share this
        with your family and friends and let us fight COVID together.
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1LxK0qZkwQnntRL-PASipOvHWYemjpMLI#grid"
          style={{ width: "100%", height: "600px", border: "0" }}
        ></iframe>
        {/* <div className="container">
          <div className="row">
            {awarenessMaterial.map((item) => (
              <div key={item.title} className="col-md-4">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div
                    style={{ backgroundPositionY: item.logoRelativePosition }}
                    className="grid-icon"
                  ></div>
                  <div className="grid-title">{item.title}</div>
                </a>
              </div>
            ))}
          </div>
        </div> */}
      </p>
    </div>
  </Wrapper>
);

export default Notices;
