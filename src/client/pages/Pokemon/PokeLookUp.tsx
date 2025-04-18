// Packages
import React, { useState } from 'react';

// Main component
const PokeLookUp = () => {
  const [data, setData] = useState<string | null>(null);

  const handleClick = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/starmie');
    if (response.ok) {
      const res = await response.json();
      setData(res?.name);
      console.log(res);
    } else {
      setData('Connection to backend failed');
      // console.log('fail');
    }
  };

  return (
    <div className='page-three'>
      <h1>Let&apos;s get that sweet sweet data</h1>
      <button onClick={handleClick}>Click me to retrieve Starmie data</button>
      <div>{data}</div>
    </div>
  );
};

export default PokeLookUp;
