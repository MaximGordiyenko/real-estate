import React, {useState} from 'react';
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import data from '../../api/movies';
import style from '../../css/Map.module.css';

const MapRender = () => {
    const [selectedApart, setSelectedApart] = useState(null); //react Hooks

    return (
      <GoogleMap defaultZoom={15}
                 defaultCenter={{lat: -33.942032, lng: 151.238342}}
      >
          {data.map(place => (
            <Marker key={place.id}
                    position={{
                        lat: Number(place.latitude),
                        lng: Number(place.longitude),
                    }}
                    onClick={() => {
                        setSelectedApart(place); //open info window
                    }}
            />
          ))}
          {selectedApart && (
            <InfoWindow position={{
                lat: Number(selectedApart.latitude),
                lng: Number(selectedApart.longitude),
            }}
                        onCloseClick={() => {
                            setSelectedApart(null) //close info window
                        }}
            >
                <div className={style.infoWindow}>
                    <h2 className={style.infoTitle}>{selectedApart.title}</h2>
                    <p className={style.infoText}>{selectedApart.description}</p>
                    <img className={style.infoImage}
                         src={selectedApart.image}
                         alt={selectedApart.title}/>
                </div>
            </InfoWindow>
          )}
      </GoogleMap>
    )
};

const WrappedMap = withScriptjs(withGoogleMap(MapRender));

export default function Map() {
    return (
      <div className={style.mapWrapper}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAb1Y-fg-KAN6JXuTQKSOBJmiDc-iI8-NY`}
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div style={{height: `400px`}}/>}
            mapElement={<div style={{height: `100%`}}/>}
          />
      </div>
    )
}
