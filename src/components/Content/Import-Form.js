import React, { Component } from "react";
import Wrapper from "./Wrapper";

class Volunteer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <div>
          <p>
            <div style={{ minWidth: "98vw" }}></div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd0BzPMgZAZXwfxTKNm248wUS73McoPVgOBwYM_FfRbxwgRwA/viewform?embedded=true"
              style={{ width: "100%" }}
              height="3093"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </p>
        </div>
      </Wrapper>
    );
  }
}
export default ImportForm;
