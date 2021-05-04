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
              src="https://docs.google.com/forms/d/e/1FAIpQLScYB1uaMOzNKWnONsboxTEjfW2jZHBu9SmbY7yWm4fKuln4JQ/viewform?embedded=true"
              style={{ width: "100%" }}
              height="5730"
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
export default Volunteer;
