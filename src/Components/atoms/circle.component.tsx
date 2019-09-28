import React from "react";

export function Circle() {
  return (
    <svg>
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(0,255,0)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(255,255,255)", stopOpacity: 1 }}
          />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
    </svg>
  );
}
