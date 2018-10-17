import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementData, decrementData } from "./testActions";
import { Button } from "semantic-ui-react";

const mapState = state => ({
  data: state.test.data
});

const mapDispatch = {
  incrementData,
  decrementData
};

export class TestComponent extends Component {
  render() {
    const { decrementData, incrementData, data } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The data is {data}</h3>
        <Button onClick={incrementData} positive content="Increment" />
        <Button onClick={decrementData} negative content="Decrement" />
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(TestComponent);
