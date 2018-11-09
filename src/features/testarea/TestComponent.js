import React, { Component } from "react";
import { connect } from "react-redux";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import GoogleMapReact from "google-map-react";
import { incrementData, decrementData } from "./testActions";
import { Button, Icon } from "semantic-ui-react";

const mapState = state => ({
  data: state.test.data
});

const mapDispatch = {
  incrementData,
  decrementData
};

const Marker = () => <Icon name="marker" size="big" color="red" />;

export class TestComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state = {
    address: "",
    scriptLoaded: false
  };

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => {
    this.setState({ address });
  };

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };

    const { decrementData, incrementData, data } = this.props;
    return (
      <div>
        {/* <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAvzaasXFmOq0nHFUFv4IWmtBAdNwT2jrg&libraries=places"
          onLoad={this.handleScriptLoad}
        /> */}
        <h1>Test Component</h1>
        <h3>The data is {data}</h3>
        <Button onClick={incrementData} positive content="Increment" />
        <Button onClick={decrementData} negative content="Decrement" />
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
        </form>
        <div style={{ height: "300px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAvzaasXFmOq0nHFUFv4IWmtBAdNwT2jrg"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker lat={59.955413} lng={30.337844} text={"Kreyser Avrora"} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(TestComponent);
