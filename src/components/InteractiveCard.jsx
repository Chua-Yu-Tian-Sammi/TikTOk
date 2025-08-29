import React from "react";

const InteractiveCard = ({ data }) => {
  // data can include charts, buttons, sliders, etc.
  return (
    <div className="interactive-card mt-2 p-2 border rounded bg-gray-50">
      {data.type === "button" && <button onClick={data.onClick} className="px-2 py-1 bg-blue-500 text-white rounded">{data.label}</button>}
      {data.type === "chart" && <div>{/* Insert chart library like Chart.js here */}</div>}
      {data.type === "slider" && <input type="range" min={0} max={100} />}
    </div>
  );
};

export default InteractiveCard;
