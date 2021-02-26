import React, { Component } from "react";
import { Table } from "semantic-ui-react";

export default class DisplayArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      column: null,
      data: this.props.data,
      direction: null,
    };
  }

  render() {
    return (
      <div style={{ margin: "2%" }}>
        <Table sortable celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={
                  this.state.column === "flight_num"
                    ? this.state.direction
                    : null
                }
                //   onClick={() => dispatch({ type: "CHANGE_SORT", this.state.column: "name" })}
              >
                Flight No.
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={
                  this.state.column === "mission_name"
                    ? this.state.direction
                    : null
                }
                //   onClick={() => dispatch({ type: "CHANGE_SORT", this.state.column: "age" })}
              >
                Mission Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={
                  this.state.column === "launch_year"
                    ? this.state.direction
                    : null
                }
                //   onClick={() =>dispatch({ type: "CHANGE_SORT", this.state.column: "gender" })}
              >
                Launch Year
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={
                  this.state.column === "launch_status"
                    ? this.state.direction
                    : null
                }
                //   onClick={() =>dispatch({ type: "CHANGE_SORT", this.state.column: "gender" })}
              >
                Launch Status
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={
                  this.state.column === "launch_status"
                    ? this.state.direction
                    : null
                }
                //   onClick={() =>dispatch({ type: "CHANGE_SORT", this.state.column: "gender" })}
              >
                Landing Status
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={
                  this.state.column === "details" ? this.state.direction : null
                }
                //   onClick={() =>dispatch({ type: "CHANGE_SORT", this.state.column: "gender" })}
              >
                Details
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.data.map((item, index) => (
              <Table.Row key={item.flight_number}>
                <Table.Cell>{item.flight_number}</Table.Cell>
                <Table.Cell>{item.mission_name}</Table.Cell>
                <Table.Cell>{item.launch_year}</Table.Cell>
                <Table.Cell>
                  {item.launch_success ? "Success" : "Fail"}
                </Table.Cell>
                <Table.Cell>
                  {item.rocket.first_stage.cores[0].land_success === null
                    ? "N/A"
                    : "Success"}
                </Table.Cell>
                <Table.Cell>
                  {item.details ? item.details : "No Details Available"}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
