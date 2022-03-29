import React, { useState, useContext } from "react";
import { chargerDetails, distance } from "../constants";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [currLocation, setCurrLocation] = useState({
        lat: 28.6213197,
        lng: 76.9715311,
    });

    const [minDistanceCharger, setMinimumDistanceCharger] = useState(0);
    const [currCharger, setCurrCharger] = useState(0);

    const updateMinDistanceCharger = () => {
        const currLat = currLocation.lat;
        const currLng = currLocation.lng;

        let minDistance = 10000000;

        let tempMinimumDistanceCharger = chargerDetails[0];

        for (const eachCharger of chargerDetails) {
            const currDistance = distance(
                eachCharger.lat,
                eachCharger.lng,
                currLat,
                currLng
            );
            console.log(currDistance, " ", eachCharger.location);
            if (currDistance <= minDistance) {
                tempMinimumDistanceCharger = eachCharger;
                minDistance = currDistance;
            }
        }
        setMinimumDistanceCharger(tempMinimumDistanceCharger.code);
    };

    return (
        <AppContext.Provider
            value={{
                currLocation,
                setCurrLocation,
                minDistanceCharger,
                updateMinDistanceCharger,
                currCharger,
                setCurrCharger,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
