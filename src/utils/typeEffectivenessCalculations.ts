// Types
import { TypeCalcDisplayBlockProps } from '../client/frontendTypes';

// Utils
import { pokeApiCache } from './pokeApi/pokeApiCache';
import { RESOURCE_KEY_MAP, TYPES, TypeDisplayName } from './pokeApi/constants';
// import { getEntireResource } from './pokeApi/fetchers/getEntireResource';

const damageCalcDict = {
  no_damage_to: 0,
  half_damage_to: 0.5,
  double_damage_to: 2,
  no_damage_from: 0,
  half_damage_from: 0.5,
  double_damage_from: 2
};

type TypeMultiplierHolder = {
  [K in TypeDisplayName]: {
    name: K;
    multiplier: number;
  };
};

type TypeCountHolder = {
  [K in TypeDisplayName]: {
    name: K;
    count: number;
  };
};

const displayTypes: TypeDisplayName[] = [
  'NORMAL',
  'FIGHTING',
  'FLYING',
  'POISON',
  'GROUND',
  'ROCK',
  'BUG',
  'GHOST',
  'STEEL',
  'FIRE',
  'WATER',
  'GRASS',
  'ELECTRIC',
  'PSYCHIC',
  'ICE',
  'DRAGON',
  'DARK',
  'FAIRY'
];

const createTypeMultiplierHolder = (): TypeMultiplierHolder => {
  return Object.fromEntries(
    displayTypes.map((type) => [type, { name: type, multiplier: 1 }])
  ) as TypeMultiplierHolder;
};

const createTypeCountHolder = (): TypeCountHolder => {
  return Object.fromEntries(
    displayTypes.map((type) => [type, { name: type, count: 0 }])
  ) as TypeCountHolder;
};

export const convertTypeMultiplierToTypeCalcDisplayBlockProps = (
  typeMultiplierHolder: TypeMultiplierHolder
): TypeCalcDisplayBlockProps[] => {
  const result = [];
  for (const type of displayTypes) {
    result.push(typeMultiplierHolder[type]);
  }
  // console.log('convertTypeMultiplierToTypeCalcDisplayBlockProps result');
  // console.log(result);
  return result;
};

export const defenseTypeMultiplierCalculation = (
  typeList: TypeDisplayName[]
): TypeMultiplierHolder => {
  // console.log('starting getEntireResource from defenseTypeCalculation');
  // await getEntireResource(RESOURCE_KEY_MAP.TYPE);
  // console.log('finished getEntireResource from defenseTypeCalculation');
  const typeMultiplierHolder = createTypeMultiplierHolder();
  for (const type of typeList) {
    const typeId = TYPES[type];

    if (pokeApiCache?.[RESOURCE_KEY_MAP.TYPE]?.[typeId] === undefined) {
      console.log(
        `Error in func "defenseTypeCalculation": Type id ${typeId} was not found in the pokeApiCache`
      );
      continue;
    }

    const damageRelations = pokeApiCache[RESOURCE_KEY_MAP.TYPE][typeId].damage_relations;

    for (const double of damageRelations.double_damage_from) {
      const d = double.name.toUpperCase() as TypeDisplayName;
      typeMultiplierHolder[d].multiplier =
        typeMultiplierHolder[d].multiplier * damageCalcDict.double_damage_from;
      // console.log(
      //   `Double damage from ${d}, current multiplier: ${typeMultiplierHolder[d].multiplier}`
      // );
    }

    for (const half of damageRelations.half_damage_from) {
      const h = half.name.toUpperCase() as TypeDisplayName;
      typeMultiplierHolder[h].multiplier =
        typeMultiplierHolder[h].multiplier * damageCalcDict.half_damage_from;
    }

    for (const zero of damageRelations.no_damage_from) {
      const z = zero.name.toUpperCase() as TypeDisplayName;
      typeMultiplierHolder[z].multiplier =
        typeMultiplierHolder[z].multiplier * damageCalcDict.no_damage_from;
    }
  }
  return typeMultiplierHolder;
};

export const offenseTypeMultiplierCalculation = (
  typeList: TypeDisplayName[]
): TypeMultiplierHolder => {
  // console.log('starting getEntireResource from offenseTypeCalculation');
  // await getEntireResource(RESOURCE_KEY_MAP.TYPE);
  // console.log('finished getEntireResource from offenseTypeCalculation');
  const typeMultiplierHolder = createTypeMultiplierHolder();
  for (const type of typeList) {
    const typeId = TYPES[type];
    if (pokeApiCache?.[RESOURCE_KEY_MAP.TYPE]?.[typeId] === undefined) {
      console.log(
        `Error in func "offenseTypeCalculation": Type id ${typeId} was not found in the pokeApiCache`
      );
      continue;
    }
    const damageRelations = pokeApiCache[RESOURCE_KEY_MAP.TYPE][typeId].damage_relations;
    for (const double of damageRelations.double_damage_to) {
      const d = double.name.toUpperCase() as TypeDisplayName;
      typeMultiplierHolder[d].multiplier =
        typeMultiplierHolder[d].multiplier * damageCalcDict.double_damage_to;
      // console.log(
      //   `Double damage from ${d}, current multiplier: ${typeMultiplierHolder[d].multiplier}`
      // );
    }
    for (const half of damageRelations.half_damage_to) {
      const h = half.name.toUpperCase() as TypeDisplayName;
      typeMultiplierHolder[h].multiplier =
        typeMultiplierHolder[h].multiplier * damageCalcDict.half_damage_to;
    }
    for (const zero of damageRelations.no_damage_to) {
      const z = zero.name.toUpperCase() as TypeDisplayName;
      typeMultiplierHolder[z].multiplier =
        typeMultiplierHolder[z].multiplier * damageCalcDict.no_damage_to;
    }
  }

  return typeMultiplierHolder;
};

export const typeMultiplierCounter = (typeMultiplierHolderList: TypeMultiplierHolder[]) => {
  const typeCountHolder = createTypeCountHolder();
  for (const typeMultiplierHolder of typeMultiplierHolderList) {
    for (const typeName of displayTypes) {
      if (typeMultiplierHolder[typeName].multiplier > 1) {
        typeCountHolder[typeName].count++;
      }
    }
  }
  return typeCountHolder;
};
