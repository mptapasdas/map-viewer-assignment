import React from "react";
import { useGlobalContext } from "../../context-provider/context-provider";
import { chargerDetails } from "../../constants";
const ChargerDetails = () => {
    const { currCharger } = useGlobalContext();
    return (
        <div className='text-align-center round-corner mb-3'>
            <p className='heading'>Click On A Charger to View Details</p>
            <p className='heading2'>
                Location : {chargerDetails[currCharger].location}
            </p>
            <p className='heading2'>
                Charger Type :{chargerDetails[currCharger].type}
            </p>
            <p className='heading2'>Lat : {chargerDetails[currCharger].lat}</p>
            <p className='heading2'>Lng : {chargerDetails[currCharger].lng}</p>
        </div>
    );
};

export default ChargerDetails;
