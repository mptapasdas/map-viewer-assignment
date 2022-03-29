import React from "react";
import { chargerDetails } from "../../constants";
import { useGlobalContext } from "../../context-provider/context-provider";

const MinDistanceCharger = () => {
    const { minDistanceCharger } = useGlobalContext();
    return (
        <div className='text-align-center round-corner mb-3'>
            <p className='heading'>Min Distance charger details</p>
            <p className='heading2'>
                Location : {chargerDetails[minDistanceCharger].location}
            </p>
            <p className='heading2'>
                Type : {chargerDetails[minDistanceCharger].type}
            </p>
            <p className='heading2'>
                Lat : {chargerDetails[minDistanceCharger].lat}
            </p>
            <p className='heading2'>
                Lng : {chargerDetails[minDistanceCharger].lng}
            </p>
        </div>
    );
};

export default MinDistanceCharger;
