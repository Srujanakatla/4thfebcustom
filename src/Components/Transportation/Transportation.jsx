import React from "react";
import "./Transportation.css";

const Transportation = () => {
  const transportData = [
    { id: 1, vehicle: "Bus" },
    { id: 2, vehicle: "Van" },
    { id: 3, vehicle: "Car" }
  ];

  return (
    <div className="Transportation">
      <h2>Transportation Details</h2>
      <table border={1} cellPadding={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vehicle</th>
          </tr>
        </thead>
        <tbody>
          {transportData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.vehicle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transportation;

