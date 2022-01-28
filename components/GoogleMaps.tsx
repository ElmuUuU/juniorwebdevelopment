import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

let map: google.maps.Map;
const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8,
  });
}

function GoogleMaps() {
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
    ></GoogleMap>
  );
}

export default GoogleMaps;
