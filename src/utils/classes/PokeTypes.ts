//import pokeFetch from './pokeFetch';

// const getTypeDict = async () => {
//   const data = await pokeFetch('/type');
//   //console.log(data);
//   const typeList = data.results;
//   if (!typeList) return {};
//   const typeDict = {};
//   for (const typeObj of typeList) {
//     const key = typeObj.name;
//     const url = typeObj.url.replace('https://pokeapi.co/api/v2/', '');
//     const value = await pokeFetch(url);
//     typeDict[key] = value;
//   }
//   console.log(typeDict);
//   return typeDict;
// };

//getTypeDict();

import { Type, TypeRelations } from '../pokeApi/models';
import { getResourceByNameOrId } from '../pokeApi/fetchers/getResourceByNameOrId';
import { getResourceList } from '../pokeApi/fetchers/getResourceList';
import { RESOURCE_KEY_MAP } from '../pokeApi/constants';

export const getTypeList = async (): Promise<Type[]> => {
  const response = await getResourceList(RESOURCE_KEY_MAP.TYPE);
  //console.log(data);
  const resultList = response.data.results;
  if (!resultList) return [];
  const typeList = [];
  for (const typeObj of resultList) {
    const value = await getResourceByNameOrId(RESOURCE_KEY_MAP.TYPE, typeObj.name);
    typeList.push(value.data);
  }
  console.log(typeList);
  return typeList;
};

// export type Type = {
//   /** The identifier for this resource */
//   id: number;
//   /** The name for this resource */
//   name: string;
//   /** A detail of how effective this type is toward others and vice versa */
//   damage_relations: TypeRelations;
//   /** A list of details of how effective this type was toward others and vice versa in previous
//    * generations */
//   past_damage_relations: TypeRelationsPast[];
//   /** A list of game indices relevant to this item by generation */
//   game_indices: GenerationGameIndex[];
//   /** The generation this type was introduced in */
//   generation: NamedAPIResource;
//   /** The class of damage inflicted by this type */
//   move_damage_class: NamedAPIResource;
//   /** The name of this resource listed in different languages */
//   names: Name[];
//   /** A list of details of Pokémon that have this type */
//   pokemon: TypePokemon[];
//   /** A list of moves that have this type */
//   moves: NamedAPIResource[];
// };

// export type TypeRelations = {
//   /** A list of types this type has no effect on */
//   no_damage_to: NamedAPIResource[];
//   /** A list of types this type is not very effect against */
//   half_damage_to: NamedAPIResource[];
//   /** A list of types this type is very effect against */
//   double_damage_to: NamedAPIResource[];
//   /** A list of types that have no effect on this type */
//   no_damage_from: NamedAPIResource[];
//   /** A list of types that are not very effective against this type */
//   half_damage_from: NamedAPIResource[];
//   /** A list of types that are very effective against this type */
//   double_damage_from: NamedAPIResource[];
// };

export class PokeTypes {
  private normal?: Type;
  private fighting?: Type;
  private flying?: Type;
  private poison?: Type;
  private ground?: Type;
  private rock?: Type;
  private bug?: Type;
  private ghost?: Type;
  private steel?: Type;
  private fire?: Type;
  private water?: Type;
  private grass?: Type;
  private electric?: Type;
  private psychic?: Type;
  private ice?: Type;
  private dragon?: Type;
  private dark?: Type;
  private fairy?: Type;
  private stellar?: Type;
  private unknown?: Type;
  private shadow?: Type;

  constructor(types: Type[]) {
    console.log('types:', types);
    types.forEach((type) => {
      (this as any)[type.name] = type;
    });
  }

  getType(name: string): Type | undefined {
    return (this as any)[name]; // Dynamically retrieve type
  }
}
