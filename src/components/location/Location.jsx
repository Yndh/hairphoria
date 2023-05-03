import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

import "./Location.css";
import marker from '../../assets/marker.webp'

const Location = () => {
  const customIcon = new Icon({
    iconUrl: marker,
    iconSize: [20, 35],
    iconAnchor: [10, 35],
    popupAnchor: [0, -40],
  });
  const position = [53.7799, 20.4942];


  return (
    <div className="location" id="local">
      <p>Lokalizacja</p>
      <h2>Znajdź nas tutaj</h2>
      <span>
        Nasz salon fryzjerski znajduje się w świetnej lokalizacji, co czyni nas
        łatwo dostępnymi dla Ciebie. Przyjdź i skorzystaj z naszych usług, by
        poczuć się piękna i zrelaksować.
      </span>
      <div className="map" style={{ zIndex: 0 }}>
        <MapContainer
          center={position}
          zoom={16}
          minZoom={2}
          scrollWheelZoom={true}
          style={{
            width: "100%",
            height: "100%",
            zIndex: 2,
            background: "transparent",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // Realistic map
            // url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"
            // attribution='Map data &copy; <a href="https://www.openstreetmap.org/"  target="_blank">OpenStreetMap</a> contributors'
            noWrap={true}
          />

          <Marker position={position} icon={customIcon}>
            <Popup>Hairphoria</Popup>
          </Marker>

          {/* <MyComponent /> */}
        </MapContainer>
      </div>
    </div>
  );
};
export default Location;
