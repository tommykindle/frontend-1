import React, { useState } from "react";

export default function CurrentPosistion() {
  const [lng, setLng] = useState("");
  const [lat, setLat] = useState("");

  const displayLocationInfo = position => {
    return setLng(position.coords.longitude), setLat(position.coords.latitude);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  }

  return <div>{`longitude: ${lng} | latitude: ${lat}`}</div>;
}
