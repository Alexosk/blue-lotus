import React from "react";

export const MenuItem = ({ name, description, isVegan, useBoldName }) => (
  <li className="mb-3">
    <h5 className="font-weight-light menu-item">
      <span
        className={`${useBoldName ? "font-weight-bold" : ""} ${
          isVegan ? "veganMenuItem" : ""
        }`}
      >
        {name}
        {isVegan && <span className="veganBefore font-weight-bold">(V)</span>}
      </span>{" "}
      {description}
      {isVegan && <span className="veganAfter font-weight-bold">(V)</span>}
    </h5>
  </li>
);
