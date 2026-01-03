// Packages
import React from 'react';

// Types
import { TypeCalcDisplayBlockProps } from '../../frontendTypes';

// Main Component
const TypeCalcDisplayBlock = (props: TypeCalcDisplayBlockProps) => {
  const { name, multiplier } = props;
  const displayName = name.substring(0, 3);
  // const displayName = name;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',     // stack vertically
        justifyContent: 'center',    // center vertically
        alignItems: 'center',        // center horizontally
        border: 'solid',
        borderWidth: '0.5px',
        boxSizing: 'border-box',
        minWidth: '30px',
        fontSize: '12px'
      }}
    >
      <div>{displayName}</div>
      <div>{multiplier}</div>
    </div>
  );
};

export default TypeCalcDisplayBlock;
