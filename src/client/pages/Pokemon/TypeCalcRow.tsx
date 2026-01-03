// Packages
import React from 'react';

// Types
import { TypeCalcDisplayBlockProps, TypeCalcRowProps } from '../../frontendTypes';

// Utils
import {
  defenseTypeMultiplierCalculation,
  offenseTypeMultiplierCalculation,
  convertTypeMultiplierToTypeCalcDisplayBlockProps
} from '../../../utils/typeEffectivenessCalculations';

// Components
import TypeCalcDisplay from './TypeCalcDisplay';

// Main Component
import { useEffect, useState } from 'react';

const TypeCalcRow = (props: TypeCalcRowProps) => {
  const { offenseOrDefense, typeList } = props;
  const [typeCalcs, setTypeCalcs] = useState<TypeCalcDisplayBlockProps[]>(null); // adjust type as needed
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let result = null;
      if (offenseOrDefense === 'DEFENSE') {
        result = convertTypeMultiplierToTypeCalcDisplayBlockProps(defenseTypeMultiplierCalculation(typeList));
      } else {
        result = convertTypeMultiplierToTypeCalcDisplayBlockProps(offenseTypeMultiplierCalculation(typeList));
      }
      setTypeCalcs(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
      <div>
        {JSON.stringify(typeList)}: {offenseOrDefense}
      <TypeCalcDisplay typeCalcs={typeCalcs} />
    </div>
  );
};

export default TypeCalcRow;
