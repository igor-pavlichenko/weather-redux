import React from 'react';
import { GoogleMapLoader, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyCSl6bU6nZs3wNniLByd5q9tCJw3-DIgLk";

const Map = (props) => {
  return (
    <GoogleMapLoader
      containerElement={<div style={{ height: '100%' }} />}
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
      }
    />
  )
};

export default Map;
