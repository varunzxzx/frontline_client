import React, { Component } from "react";
import Wrapper from "./Wrapper";
import "../../styles/resource.less";
class Resource extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Wrapper notHome>
        <div>
          <div style={{ minWidth: "98vw" }}></div>
          <iframe
            id="resources-iframe"
            style={{
              width: "100%",
              "overflow-y": "scroll",
            }}
            height="2121"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            src={
              this.props.iframeSrc ||
              "https://script.google.com/macros/s/AKfycbyHGh-AisJVBuqfZ4pfSqu001AE6JetStqpLL2xg74m-Wgdd5Ogh6yGVKG6gYuqnn1D0g/exec"
            }
          >
            Loading…
          </iframe>
        </div>
      </Wrapper>
    );
  }
}
export default Resource;
