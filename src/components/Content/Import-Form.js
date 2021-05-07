import React, { Component } from "react";
import Wrapper from "./Wrapper";

class ImportForm extends Component {
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
              style={{
                width: "100%",
                "-webkit-overflow-scrolling": "touch",
                "overflow-y": "scroll",
              }}
              height="1000"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
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
