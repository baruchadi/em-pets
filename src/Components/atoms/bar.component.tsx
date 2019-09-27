import React from "react";

export const BarComponent = ({ max = 150, filled = 10 }) => {
    const new_height = filled/100*max
  return (
    <svg width="1em" height={max} className="ph1">
      <g className="bars">
        <rect fill="#3d5599" width="100%" height={max}></rect>
        <rect
          fill="#cb4d3e"
          width="100%"
          height={max-new_height}
          style={{ transition: "height .5s ease" }}
        ></rect>
      </g>
    </svg>
  );
};
