import React from 'react';

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

function LocationPin() {
  return <div></div>;
}

export default LocationPin;
