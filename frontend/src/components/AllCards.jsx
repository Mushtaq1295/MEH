import React from 'react';
import EngineCard from './Engines/EngineCard';
import AshokLeyland from './Engines/AshokLeyland';
import Accessories from './Accessories/Accessories';
import Tata from './Engines/Tata';
import BharatBenz from './Engines/BharatBenz';
import Eicher from './Engines/Eicher';
import { Link } from 'react-router-dom';

const AllCards = () => {
  return (
    <>
      <h1 className="text-3xl font-bold m-6">Engines</h1>
      
      <AshokLeyland/>
      <hr />
      <Tata/>
      <hr />
      <BharatBenz/>
      <hr />
      <Eicher/>
      <hr />
      
      <h1 className="text-3xl font-bold m-6">Accessories</h1>
      <Accessories/>

      {/* Plus icon container */}
      {/* <div className="fixed bottom-8 right-6 z-5100">
        <div className="flex items-center justify-center h-[50px] w-[50px] bg-blue-600  rounded-xl">
          <Link 
          to="/add"
            className="fa-solid fa-plus text-white text-2xl"></Link>
        </div>
      </div> */}
    </>
  );
};

export default AllCards;