import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Header, Icon, Divider } from "semantic-ui-react";
import FilterArea from "../Components/FilterArea";
import DisplayArea from "../Components/DisplayArea";
// import ButtonGrp from "../Components/ButtonGroup";
import "../Assets/style.css";

var config = {
  method: "get",
  url: "https://api.spacexdata.com/v3/launches?limit=100",
  headers: {
    // Cookie: "__cfduid=d3a4f794862e712b2abd9daeac009c6c91614260982",
  },
};

var arr = [];

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async FetchData() {
    var temp = await axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ data: temp });
    console.log("DATA REC:", this.state.data);
  }

  componentDidMount() {
    this.FetchData();
  }

  render() {
    const loading = this.state.data.length === 0;
    return (
      <div className="demo-big-content">
        <Header
          inverted
          as="h1"
          className="head"
          style={{ padding: "2%", margin: "1%", borderRadius: 10 }}
        >
          <Icon name="space shuttle" /> Explor SpaceX Program
        </Header>
        <FilterArea />
        <Divider />
        <DisplayArea data={this.state.data} />
      </div>
    );
  }
}
