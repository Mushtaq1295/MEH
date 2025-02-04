import React from "react";

const AccessCard = ({ image, title, available }) => {
  // Default values to prevent crashes
  const safeTitle = title || "Unknown Engine";
  const safeImage = image || "https://via.placeholder.com/300"; // Placeholder image
  const safeAvailable = available ?? "N/A"; // Handle undefined availability

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm transition-transform transform hover:scale-105">
      <img className="rounded-t-lg" src={safeImage} alt={safeTitle} />
      <div className="p-5">
        <h6 className="mb-2 text-xl font-semibold">Name: {safeTitle}</h6>
        <p className="mb-3 text-lg">Available: {safeAvailable}</p>
      </div>
    </div>
  );
};

export default AccessCard;
