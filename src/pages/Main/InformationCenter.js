import React, { Component } from "react";
import { Tabs } from "antd";
import Resource from "@components/Content/Resource";
import Notices from "@components/Content/Notices";
import ResourceFinder from "./ResourceFinder";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

class InformationCenter extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props);
  }

  render() {
    return (
      <Tabs
        defaultActiveKey={this.props.match.page || "citizen-resource-finder"}
        size="default"
        style={{ marginBottom: 32 }}
        centered
      >
        <TabPane tab="CITIZEN RESOURCE FINDER" key="citizen-resource-finder">
          <ResourceFinder />
        </TabPane>
        <TabPane tab="COVID RESOURCE DIRECTORY" key="covid-resource-directory">
          <Link to="/information-center/covid-resource-directory">
            <Resource />
          </Link>
        </TabPane>
        <TabPane tab="AWARENESS MATERIAL" key="awareness-material">
          <Notices />
        </TabPane>
        {/* <TabPane tab="CHILDREN SUPPORT" key="children-support">
          <Resource iframeSrc="https://script.google.com/macros/s/AKfycby8juAYkFJ-JhKcuhgpCc5zkpMn-u094XikY4MSykO90yRwNc03hHaBqbNEnSsM_p4E_Q/exec" />
        </TabPane> */}
      </Tabs>
    );
  }
}

export default withRouter(InformationCenter);
