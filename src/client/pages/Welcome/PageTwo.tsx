// Packages
import React, { useState } from 'react';

// Main component
const PageTwo = () => {
  const [data, setData] = useState<string | null>(null);

  const handleClick = async () => {
    const response = await fetch('/api/user');
    if (response.ok) {
      const res = await response.json();
      setData(res.message);
      // console.log(res);
    } else {
      setData('Connection to backend failed');
      // console.log('fail');
    }
  };

  return (
    <div className='page-two'>
      <h1>This is page two</h1>
      <button onClick={handleClick}>Click me to check backend</button>
      <div>{data}</div>
    </div>
  );
};

export default PageTwo;
