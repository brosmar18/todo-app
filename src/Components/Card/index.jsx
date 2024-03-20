import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
