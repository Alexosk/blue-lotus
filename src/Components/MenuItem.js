import React from "react";

export const MenuItem = ({
  description,
  isVegan,
  name,
  useBoldName,
  useDot,
  useSmallerFont,
}) => (
  <li className="mb-3" style={{ listStyleType: "none" }}>
    <span
      className={`font-weight-light menu-item `}
      style={{ fontSize: useSmallerFont ? "16px" : "" }}
    >
      <span
        className={`${useBoldName ? "font-weight-bold" : ""} ${
          isVegan ? "veganMenuItem" : ""
        }`}
      >
        {useDot ? String.fromCharCode(3866) : ""} {name}
        {isVegan && <span className="veganBefore font-weight-bold">(V)</span>}
      </span>{" "}
      {description}
      {isVegan && <span className="veganAfter font-weight-bold">(V)</span>}
    </span>
  </li>
);
