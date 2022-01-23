import React, { useState, Fragment } from "react";

// 4 ) Building reusable Component

// InterectiveView Component
const InrectiveView = ({ value, onAction, actionText }) => {
  return (
    <React.Fragment>
      <p>{value}</p>
      <button type="button" onClick={onAction}>
        {actionText}
      </button>
    </React.Fragment>
  );
};

export default InrectiveView;
