import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useGlobalContext } from "../../context-provider/context-provider";

const ChargerMarker = (props) => {
    const { setCurrCharger } = useGlobalContext();
    const { charger } = props;
    return (
        <div className='marker-container'>
            <BsFillLightningChargeFill
                className='icon'
                onClick={() => setCurrCharger(charger.code)}
            />
        </div>
    );
};

export default ChargerMarker;
