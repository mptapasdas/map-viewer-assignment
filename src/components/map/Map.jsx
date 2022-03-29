import React from "react";
import GoogleMapReact from "google-map-react";
import ChargerMarker from "../charger-marker/ChargerMarker";

import { chargerDetails } from "../../constants";

const Map = () => {
    const defaultLocation = {
        lat: 28.6213197,
        lng: 76.9715311,
        zoom: 9,
    };

    return (
        <div className='hide-overflow col-12 col-lg-6'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    keys: "",
                }}
                defaultCenter={defaultLocation}
                defaultZoom={defaultLocation.zoom}
                style={{ height: "100vh" }}>
                {chargerDetails.map((charger) => (
                    <ChargerMarker
                        key={charger.code}
                        lat={charger.lat}
                        lng={charger.lng}
                        charger={charger}
                    />
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
