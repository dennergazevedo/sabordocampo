import React, { Component } from "react";
import Dimensions from "react-dimensions";
import { Container } from "../styles";
import MapGL from "react-map-gl";
import PropTypes from "prop-types";

const TOKEN =
  "pk.eyJ1IjoiZGV2YXJ0Y29waWFzIiwiYSI6ImNrZHlxMmJnOTFpOWIyd25vMXB5dXR2c3AifQ.q6XiiHGshAk-sTcaRd1Vug";

class Map extends Component {

  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  };

  state = {
    viewport: {
      latitude: -20.1707255,
      longitude: -42.5323096,
      zoom: 12.8,
      bearing: 0,
      pitch: 0
    }
  };
  render() {
    return (
      <MapGL
        width={"100%"}
        height={"350px"}
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

const DimensionedMap = Dimensions()(Map);
const App = () => (
  <Container>
    <DimensionedMap />
  </Container>
);

export default App;