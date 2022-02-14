import React from "react";

import "./BunttonComponent.css";

const BunttonComponent = ({ children, backgrounColor, color }) => {
    return (
        <button style={{
            backgroundColor: `${backgrounColor}`,
            color: `${color}`,
        }} className="button-btn"><strong>{children}</strong></button>
    );
};

export default BunttonComponent;
