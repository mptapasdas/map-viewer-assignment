import React from "react";
import Form from "./Form";
import MinDistanceCharger from "./MinDistanceCharger";
import ChargerDetails from "./ChargerDetails";
import { paragraph } from "../../constants";

const MapDetails = () => {
    return (
        <div className='col-12 col-lg-6 mt-5 details-container'>
            <Form />
            <MinDistanceCharger />
            <ChargerDetails />
            <p className='round-corner'>{paragraph}</p>
        </div>
    );
};

export default MapDetails;
