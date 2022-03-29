import React from "react";
import { useGlobalContext } from "../../context-provider/context-provider";

const Form = () => {
    const { updateMinDistanceCharger, currLocation, setCurrLocation } =
        useGlobalContext();
    const handleSubmit = () => {
        if (currLocation.lat === "" || currLocation.lng === "") {
            return;
        }
        updateMinDistanceCharger();
    };
    return (
        <div className='mb-5'>
            <h2 className='round-corner'>
                Input Lat and Long to view the minimum distance charger
            </h2>
            <form className='form-inline'>
                <div className='form-group mx-sm-3 mb-2'>
                    <label htmlFor='inputLat' className='sr-only'>
                        Input Lat
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='inputLat'
                        placeholder='Latitude'
                        onChange={(e) =>
                            setCurrLocation({
                                lat: e.target.value,
                                lng: currLocation.lng,
                            })
                        }
                    />
                </div>
                <div className='form-group mx-sm-3 mb-2'>
                    <label htmlFor='inputLng' className='sr-only'>
                        Input Lng
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='inputLng'
                        placeholder='Longitude'
                        onChange={(e) =>
                            setCurrLocation({
                                lat: currLocation.lat,
                                lng: e.target.value,
                            })
                        }
                    />
                </div>
            </form>
            <button
                className='btn btn-primary mb-2 ml-3'
                onClick={() => handleSubmit()}>
                Go
            </button>
        </div>
    );
};

export default Form;
