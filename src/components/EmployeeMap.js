// src/components/EmployeeMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMap } from '@react-leaflet/core';
import L from 'leaflet';

const EmployeeMap = ({ employees }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {employees.map(employee => (
        <Marker
          key={employee.id}
          position={[parseFloat(employee.address.geo.lat), parseFloat(employee.address.geo.lng)]}
          icon={new L.Icon({
            iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Map_marker_icon_%28SimpleWiki%29.svg/600px-Map_marker_icon_%28SimpleWiki%29.svg.png",
            iconSize: [25, 25],
          })}
        >
          <Popup>
            <strong>{employee.name}</strong><br />
            <span>{employee.email}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EmployeeMap;
