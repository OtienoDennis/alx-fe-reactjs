import React from "react";

function CustomCheckbox({checked}) {
  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <input
        type="checkbox"
        checked={checked}
        // disabled
        style={{
          appearance: "none", // Hides the native checkbox
          width: "20px",
          height: "20px",
          backgroundColor: "blue",
          border: "1px solid gray",
          borderRadius: "4px",
          cursor: "not-allowed",
        }}
      />
    </div>
  );
}

export default CustomCheckbox;
