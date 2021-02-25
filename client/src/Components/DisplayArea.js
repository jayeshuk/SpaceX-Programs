import React, { Component } from "react";
import { Table } from "semantic-ui-react";

export default class DisplayArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: [
        { name: "John", age: 15, gender: "Male" },
        { name: "Amber", age: 40, gender: "Female" },
        { name: "Leslie", age: 25, gender: "Other" },
        { name: "Ben", age: 70, gender: "Male" },
      ],
      column: null,
      //   data: this.state.tableData,
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
                Flight Number
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
                  this.state.column === "details" ? this.state.direction : null
                }
                //   onClick={() =>dispatch({ type: "CHANGE_SORT", this.state.column: "gender" })}
              >
                Details
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.data.map((item, index) => (
              <Table.Row key={item.flight_number}>
                <Table.Cell>{item.flight_number}</Table.Cell>
                <Table.Cell>{item.mission_name}</Table.Cell>
                <Table.Cell>{item.launch_year}</Table.Cell>
                <Table.Cell>
                  {item.launch_success ? "Success" : "Fail"}
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
