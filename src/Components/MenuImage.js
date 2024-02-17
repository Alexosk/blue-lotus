import React from "react";

export const MenuImage = ({ src, alt, useMarginBottom }) => (
  <div style={{ maxWidth: "800px" }}>
    <img
      className={`rounded ${useMarginBottom ? "mb-4" : ""}`}
      src={src}
      width="100%"
      alt={alt}
    />
  </div>
);
