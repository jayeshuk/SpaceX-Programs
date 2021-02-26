import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Header, Icon, Divider } from "semantic-ui-react";
import FilterArea from "../Components/FilterArea";
import DisplayArea from "../Components/DisplayArea";
// import ButtonGrp from "../Components/ButtonGroup";
import "../Assets/style.css";

function HomePage() {
  const [data, setData] = React.useState([]);
  const [launch, setLaunch] = React.useState("");
  const [land, setLand] = React.useState(null);
  const [year, setYear] = React.useState("");
  const [s, setS] = React.useState("");
  const loading = data.length === 0;

  const FetchData = async () => {
    var config = {
      method: "get",
      url: `https://api.spacexdata.com/v3/launches?limit=100`,
      headers: {
        // Cookie: "__cfduid=d3a4f794862e712b2abd9daeac009c6c91614260982",
      },
    };
    var temp = [];
    await axios(config)
      .then(function (response) {
        setData([]);
        temp = [];
        if (launch === "Succes")
          temp = response.data.filter((a) => {
            if (a.launch_success) {
              return a;
            }
          });
        else if (launch === "Fai")
          temp = response.data.filter((a) => a.launch_success === false);
        else temp = response.data;

        if (land)
          temp = temp.filter((a) => {
            if (a.rocket.first_stage.cores[0].land_success) {
              return a;
            }
          });
        else temp = temp.slice();

        if (year)
          temp = temp.filter((a) => {
            if (a.launch_year == year) return a;
          });
        else temp = temp.slice();

        console.log("NEW Data", temp);
        setData(temp.slice());
        console.log("DATA REC:", data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  React.useEffect(() => {
    FetchData();
  }, [launch, land, year]);

  // var f = [
  //   { val: launch, str: `&launch_succcess=${launch}` },
  //   // { val: land, str: `&land_success=${land}` },
  //   // { val: year, str: `&launch_year=${year}` },
  // ];
  // var temp_s = "";
  // f.forEach((item) => {
  //   if (item.val) {
  //     temp_s = temp_s + item.str;
  //   }
  // });
  // setS(temp_s);

  return (
    <div className="demo-big-content">
      <Header
        inverted
        as="h1"
        className="head"
        style={{ padding: "2%", margin: "1%", borderRadius: 10 }}
      >
        <Icon name="space shuttle" /> Explor SpaceX Programs
      </Header>
      <FilterArea setLaunch={setLaunch} setLand={setLand} setYear={setYear} />
      <Divider style={{ margin: "2%" }} />
      {loading ? (
        <h2 style={{ textAlign: "center", marginTop: "5%" }}>Loading...</h2>
      ) : (
        <DisplayArea data={data} />
      )}
    </div>
  );
}

export default HomePage;
