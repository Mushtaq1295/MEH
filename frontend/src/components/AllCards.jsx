import React from 'react';
import EngineCard from './EngineCard';
import AshokLeyland from './Engines/AshokLeyland';
import Accessories from './Accessories/Accessories';
import Tata from './Engines/Tata';
import BharatBenz from './Engines/BharatBenz';
import Eicher from './Engines/Eicher';

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

      
    </>
  );
};

export default AllCards;