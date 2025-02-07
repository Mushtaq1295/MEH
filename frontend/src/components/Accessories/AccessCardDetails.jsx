import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AccessCardDetails = () => {
    const { title, image, price, available, category ="Accessories" } = useParams();

  const [availableCount, setAvailableCount] = useState(Number(available)); // Convert available to a number

  const handleDecrease = () => {
    if (availableCount > 0) {
      setAvailableCount(availableCount - 1);
    }
  };

  const handleIncrease = () => {
    setAvailableCount(availableCount + 1);
  };

  return (
    <>
      <h3 className="text-center text-2xl font-semibold mt-3 ml-4 sm:text-xl md:text-2xl lg:text-3xl">
                Details of {title.charAt(0).toUpperCase() + title.slice(1).replace("-", " ")}
        </h3>

      <div className="mt-3 w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start bg-white shadow-lg rounded-lg p-4">
          <img src={image} className="w-full lg:w-[60%] h-auto rounded-lg" alt={title} />
          {/* Content Section */}
          <div className="mt-4 lg:mt-0 lg:ml-7 flex-1">
            <ul className="space-y-5 text-lg sm:text-base md:text-xl">
              <li><strong className="text-lg">Title : </strong> {title.charAt(0).toUpperCase() + title.slice(1).replace("-", " ")}</li>
              <li><strong className="text-lg">Price : </strong></li>
              <li><strong className="text-lg">Model (year) : </strong></li>
              <li><strong className="text-lg">Category :{category}</strong></li>
              <li><strong className="text-lg">Available : </strong> 
                <i 
                  className="fa-regular fa-circle-minus cursor-pointer mr-3"
                  onClick={handleDecrease}
                  style={{ color: availableCount === 0 ? "gray" : "black" }}
                >
                  {" "}
                </i>
                {availableCount}
                <i 
                  className="fa-regular fa-circle-plus cursor-pointer ml-3"
                  onClick={handleIncrease}
                >
                  {" "}
                </i>
              </li>
            {/* <li><strong className="text-lg">Category </strong></li> */}
            
            </ul>
            <div className="mt-6 flex space-x-2">
              <a href="#" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm md:text-base">Edit</a>
            </div>
            {/* Checkout Button */}
            <button type="button" className="cursor-pointer w-full sm:w-[250px] lg:w-[300px] mt-8 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default AccessCardDetails;
