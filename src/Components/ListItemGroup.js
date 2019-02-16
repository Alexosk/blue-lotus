import React from "react";

const ListItemGroup = ({ title, items, badge, lineBreak }) => {
  if (badge) {
    badge = (
      <span className="font-weight-bold">
          (V)
      </span>
    );
  }

  return (
    <li className="mb-3">
      <h5 className="font-weight-light menu-item">
        <span className="font-weight-bold">{title}{badge}</span> {items}
      </h5>
    </li>
  );
};

export default ListItemGroup;
