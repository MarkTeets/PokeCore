// Types
import {
  Berry,
  BerryFirmness,
  BerryFlavor,
  ContestType,
  ContestEffect,
  SuperContestEffect,
  EncounterMethod,
  EncounterCondition,
  EncounterConditionValue,
  EvolutionChain,
  EvolutionTrigger,
  Generation,
  Pokedex,
  Version,
  VersionGroup,
  Item,
  ItemAttribute,
  ItemCategory,
  ItemFlingEffect,
  ItemPocket,
  Location,
  LocationArea,
  PalParkArea,
  Region,
  Machine,
  Move,
  MoveAilment,
  MoveBattleStyle,
  MoveCategory,
  MoveDamageClass,
  MoveLearnMethod,
  MoveTarget,
  Ability,
  Characteristic,
  EggGroup,
  Gender,
  GrowthRate,
  Nature,
  PokeathlonStat,
  Pokemon,
  LocationAreaEncounter,
  PokemonColor,
  PokemonForm,
  PokemonHabitat,
  PokemonShape,
  PokemonSpecies,
  Stat,
  Type,
  Language
} from '../models';

/**
 * Endpoints of the PokéAPI
 * Connects a set of consistent keys to the endpoints they're tied to in the PokeApi
 */
export const ENDPOINT_MAP = {
  BERRY: 'berry',
  BERRY_FIRMNESS: 'berry-firmness',
  BERRY_FLAVOR: 'berry-flavor',
  CONTEST_TYPE: 'contest-type',
  CONTEST_EFFECT: 'contest-effect',
  SUPER_CONTEST_EFFECT: 'super-contest-effect',
  ENCOUNTER_METHOD: 'encounter-method',
  ENCOUNTER_CONDITION: 'encounter-condition',
  ENCOUNTER_CONDITION_VALUE: 'encounter-condition-value',
  EVOLUTION_CHAIN: 'evolution-chain',
  EVOLUTION_TRIGGER: 'evolution-trigger',
  GENERATION: 'generation',
  POKEDEX: 'pokedex',
  VERSION: 'version',
  VERSION_GROUP: 'version-group',
  ITEM: 'item',
  ITEM_ATTRIBUTE: 'item-attribute',
  ITEM_CATEGORY: 'item-category',
  ITEM_FLING_EFFECT: 'item-fling-effect',
  ITEM_POCKET: 'item-pocket',
  LOCATION: 'location',
  LOCATION_AREA: 'location-area',
  PALPARK_AREA: 'pal-park-area',
  REGION: 'region',
  MACHINE: 'machine',
  MOVE: 'move',
  MOVE_AILMENT: 'move-ailment',
  MOVE_BATTLE_STYLE: 'move-battle-style',
  MOVE_CATEGORY: 'move-category',
  MOVE_DAMAGE_CLASS: 'move-damage-class',
  MOVE_LEARN_METHOD: 'move-learn-method',
  MOVE_TARGET: 'move-target',
  ABILITY: 'ability',
  CHARACTERISTIC: 'characteristic',
  EGG_GROUP: 'egg-group',
  GENDER: 'gender',
  GROWTH_RATE: 'growth-rate',
  NATURE: 'nature',
  POKEATHLON_STAT: 'pokeathlon-stat',
  POKEMON: 'pokemon',
  POKEMON_LOCATION_AREA: 'pokemon/:id/encounters',
  POKEMON_COLOR: 'pokemon-color',
  POKEMON_FORM: 'pokemon-form',
  POKEMON_HABITAT: 'pokemon-habitat',
  POKEMON_SHAPE: 'pokemon-shape',
  POKEMON_SPECIES: 'pokemon-species',
  STAT: 'stat',
  TYPE: 'type',
  LANGUAGE: 'language'
} as const;

export const ENDPOINT_KEYS = new Set(Object.keys(ENDPOINT_MAP));
export const ENDPOINT_VALUES = new Set(Object.values(ENDPOINT_MAP));
export type EndpointKey = keyof typeof ENDPOINT_MAP;
export type EndpointValue = (typeof ENDPOINT_MAP)[EndpointKey];

/**
 * Connects a set of consistent keys to the types they return from the PokeApi
 */
export type EndpointTypeMap = {
  BERRY: Berry;
  BERRY_FIRMNESS: BerryFirmness;
  BERRY_FLAVOR: BerryFlavor;
  CONTEST_TYPE: ContestType;
  CONTEST_EFFECT: ContestEffect;
  SUPER_CONTEST_EFFECT: SuperContestEffect;
  ENCOUNTER_METHOD: EncounterMethod;
  ENCOUNTER_CONDITION: EncounterCondition;
  ENCOUNTER_CONDITION_VALUE: EncounterConditionValue;
  EVOLUTION_CHAIN: EvolutionChain;
  EVOLUTION_TRIGGER: EvolutionTrigger;
  GENERATION: Generation;
  POKEDEX: Pokedex;
  VERSION: Version;
  VERSION_GROUP: VersionGroup;
  ITEM: Item;
  ITEM_ATTRIBUTE: ItemAttribute;
  ITEM_CATEGORY: ItemCategory;
  ITEM_FLING_EFFECT: ItemFlingEffect;
  ITEM_POCKET: ItemPocket;
  LOCATION: Location;
  LOCATION_AREA: LocationArea;
  PALPARK_AREA: PalParkArea;
  REGION: Region;
  MACHINE: Machine;
  MOVE: Move;
  MOVE_AILMENT: MoveAilment;
  MOVE_BATTLE_STYLE: MoveBattleStyle;
  MOVE_CATEGORY: MoveCategory;
  MOVE_DAMAGE_CLASS: MoveDamageClass;
  MOVE_LEARN_METHOD: MoveLearnMethod;
  MOVE_TARGET: MoveTarget;
  ABILITY: Ability;
  CHARACTERISTIC: Characteristic;
  EGG_GROUP: EggGroup;
  GENDER: Gender;
  GROWTH_RATE: GrowthRate;
  NATURE: Nature;
  POKEATHLON_STAT: PokeathlonStat;
  POKEMON: Pokemon;
  POKEMON_LOCATION_AREA: LocationAreaEncounter[];
  POKEMON_COLOR: PokemonColor;
  POKEMON_FORM: PokemonForm;
  POKEMON_HABITAT: PokemonHabitat;
  POKEMON_SHAPE: PokemonShape;
  POKEMON_SPECIES: PokemonSpecies;
  STAT: Stat;
  TYPE: Type;
  LANGUAGE: Language;
};
