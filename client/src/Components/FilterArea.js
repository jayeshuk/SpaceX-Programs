import React from "react";
import { Form, Checkbox, Table } from "semantic-ui-react";

function FilterArea(props) {
  const [launchyear, setLaunchYear] = React.useState("");
  const [launchstatus, setLaunchStatus] = React.useState("");
  const [landingstatus, setLandingStatus] = React.useState("");
  const [togglelaunch, toggleLaunch] = React.useState(false);
  const [toggleland, toggleLand] = React.useState(false);
  const [toggleyear, toggleYear] = React.useState(false);
  const filters = [
    {
      id: "00",
      placeholder: "Launch Year",
      name: "launchyear",
      value: launchyear,
      toggle: async () => {
        await toggleYear(!toggleyear);
        if (toggleyear) props.setYear(launchyear);
        else {
          props.setYear("");
          setLaunchYear("");
        }
      },
      change: async (x) => {
        await setLaunchYear(x);
        if (toggleyear) await props.setYear(launchyear);
        else await props.setYear("");
      },
    },
    {
      id: "01",
      placeholder: "Launch Status",
      name: "launchstatus",
      value: launchstatus,
      toggle: async () => {
        await toggleLaunch(!togglelaunch);
        if (togglelaunch) props.setLaunch(launchstatus);
        else {
          props.setLaunch("");
          setLaunchStatus("");
        }
      },
      change: (x) => {
        setLaunchStatus(x);
        if (togglelaunch) props.setLaunch(launchstatus);
        else props.setYear("");
      },
    },
    {
      id: "10",
      placeholder: "Landing Status",
      name: "landingstatus",
      value: landingstatus,
      toggle: async () => {
        await toggleLand(!toggleland);
        if (toggleland) props.setLand(landingstatus);
        else {
          props.setLand("");
          setLandingStatus("");
        }
      },
      change: (x) => {
        setLandingStatus(x);
        if (toggleland) props.setLand(landingstatus);
        else props.setYear("");
      },
    },
  ];

  return (
    <div style={{ marginLeft: "2%", marginRight: "80%" }}>
      {/* <h3>Filters</h3> */}
      <Form>
        <Table celled columns={3}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="3">Apply Filters</Table.HeaderCell>
              {/* <Table.HeaderCell />
              <Table.HeaderCell /> */}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              {filters.map((item, index) => (
                <Table.Cell key={item.id}>
                  <Table.Cell>
                    <Checkbox slider onChange={item.toggle} />
                  </Table.Cell>
                  <Table.Cell>
                    <Form.Input
                      placeholder={item.placeholder}
                      name={item.name}
                      value={item.value}
                      onChange={(e) => item.change(e.target.value)}
                    />
                    {/* <h6>{item.value}</h6> */}
                  </Table.Cell>
                </Table.Cell>
              ))}
            </Table.Row>
          </Table.Body>
        </Table>

        {/* <Form.Button content="Filter Data" /> */}
      </Form>
    </div>
  );
}

export default FilterArea;
