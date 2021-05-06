import React, { Component } from "react";
import Wrapper from "./Wrapper";

class Resource extends Component {
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
              class="responsive-iframe"
              src="https://script.google.com/macros/s/AKfycbyHGh-AisJVBuqfZ4pfSqu001AE6JetStqpLL2xg74m-Wgdd5Ogh6yGVKG6gYuqnn1D0g/exec"
            >
              Loading…
            </iframe>
          </p>
        </div>
      </Wrapper>
    );
  }
}
export default Resource;
