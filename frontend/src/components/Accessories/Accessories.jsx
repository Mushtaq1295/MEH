import React from 'react'
import AccessCard from '../Accessories/AccessCard'

const Accessories = () => {
  return (
    <>
      
      <div id='accessories' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        <AccessCard image="/Accessories-pics/crank.jpg" title="Crank" price={10000} available={10} category="Accesories"/>
        <AccessCard image="/Accessories-pics/Dynamo.webp" title="Dynamo" price={10000} available={10} category="Accesories"/>
        <AccessCard image="/Accessories-pics/Head.webp" title="Head" price={10000} available={10} category="Accesories"/>
        <AccessCard image="/Accessories-pics/pulley.webp" title="Pulley" price={10000} available={10} category="Accesories"/>
      </div>
    </>
  )
}

export default Accessories
