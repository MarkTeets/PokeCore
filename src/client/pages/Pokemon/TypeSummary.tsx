// Packages
import React from 'react';

// Types
import { TypeSummaryProps } from '../../frontendTypes';

// Utils
import { getEntireResource } from '../../../utils/pokeApi/fetchers/getEntireResource';
import { RESOURCE_KEY_MAP, TYPES, TypeDisplayName } from '../../../utils/pokeApi/constants';

// Components
import TypeCalcRow from './TypeCalcRow';

const iterativeDisplay = (typeList: TypeDisplayName[]) => {
  const result = [];
  if (typeList.length === 1) {
    result.push(<TypeCalcRow offenseOrDefense='OFFENSE' typeList={typeList} />);
  }
  result.push(<TypeCalcRow offenseOrDefense='DEFENSE' typeList={typeList} />);
  if (typeList.length > 1) {
    for (const typeName of typeList) {
      result.push(<TypeCalcRow offenseOrDefense='OFFENSE' typeList={[typeName]} />);
      result.push(<TypeCalcRow offenseOrDefense='DEFENSE' typeList={[typeName]} />);
    }
  }
  return result;
};

// Main Component
import { useEffect, useState } from 'react';

const TypeSummary = (props: TypeSummaryProps) => {
  const { typeList } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getEntireResource(RESOURCE_KEY_MAP.TYPE);
      setLoading(false);
    };

    fetchData();
  }, []);

  //const typeList = ['FIRE', 'FLYING'] as TypeDisplayName[];

  return loading ? <div>Loading...</div> : <div>{iterativeDisplay(typeList)}</div>;
};

export default TypeSummary;
