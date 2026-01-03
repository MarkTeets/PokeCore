// Packages
import React from 'react';

// Types
import { TypeCalcDisplayProps } from '../../frontendTypes';

// Components
import TypeCalcDisplayBlock from './TypeCalcDisplayBlock';

// Main Component
const TypeCalcDisplay = (props: TypeCalcDisplayProps) => {
  const { typeCalcs } = props;
  const typeCalcDisplayBlocks = typeCalcs.map(prop => {
    return <TypeCalcDisplayBlock key={prop.name} {...prop}/>
  })
  
  return (
    <div style={{ display: 'flex' }}>
      {typeCalcDisplayBlocks}
    </div>
  )
}

export default TypeCalcDisplay;