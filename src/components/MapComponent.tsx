'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

const position: [number, number] = [43.315713, 40.408009];

function SetViewOnClick({ position }: { position: [number, number] }) {
    const map = useMap();
  
    useEffect(() => {
      map.setView(position, 12);
    }, [map, position]);
  
    return null;
  }
  
  export default function MapComponent() {
    const customIcon = new L.Icon({
      iconUrl: "https://i.postimg.cc/3JyQPrzy/geo.png",
      iconSize: [30, 25],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });
  
    return (
      <MapContainer
        center={position}
        zoom={12}
        className="mapContainer"
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>Дом мёда</Popup>
        </Marker>
        <SetViewOnClick position={position} />
      </MapContainer>
    );
  }
  