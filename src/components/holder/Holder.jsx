import React from "react";

const Holder = ({ children }) => {
    return (
        <div className='bg-container container-fluid hide-overflow'>
            <div className='row row-container hide-overflow'>{children}</div>
        </div>
    );
};

export default Holder;
