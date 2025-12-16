import { Pokemon } from '../pokeApi/models';

export class PokemonInstance {
  apiEntry: Pokemon | null;
  sqlId: number;
  pokeapiId: number;
  name: string;
  nickname: string;
  ability: string;
  level: number;
  form: string;
  gender: string;
  shiny: boolean;
  heldItem: string;
  move1: string;
  move2: string;
  move3: string;
  move4: string;
  ivHp: number;
  ivAttack: number;
  ivDefense: number;
  ivSpecialAttack: number;
  ivSpecialDefense: number;
  ivSpeed: number;
  evHp: number;
  evAttack: number;
  evDefense: number;
  evSpecialAttack: number;
  evSpecialDefense: number;
  evSpeed: number;
  teraType: string;
}
