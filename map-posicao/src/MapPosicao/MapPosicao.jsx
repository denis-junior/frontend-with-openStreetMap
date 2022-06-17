import React from "react";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";

const MapPosicao = (props) => 
    <div style={{height: "500px", width: "500px"}}>
      <MapContainer center={props.center} zoom={13} scrollWheelZoom={true}  style={{ height: '100%', width: '100%' }}>
        <TileLayer

          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {props.positions?.map((position, key) => 
        <Marker position={position} key={key}>
          <Popup>
            Voce esta aqui. <br /> Pena que foda-se
          </Popup>
        </Marker>
        )}
        <Polyline positions={props.positions}>
        </Polyline>
      </MapContainer>
    </div>
  

export default MapPosicao;
