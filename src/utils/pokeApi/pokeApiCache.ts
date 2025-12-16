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
  Language,
  NamedAPIResourceList
} from './models';

type BerryCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Berry;
};

type BerryFirmnessCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: BerryFirmness;
};

type BerryFlavorCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: BerryFlavor;
};

type ContestTypeCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: ContestType;
};

type ContestEffectCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: ContestEffect;
};

type SuperContestEffectCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: SuperContestEffect;
};

type EncounterMethodCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: EncounterMethod;
};

type EncounterConditionCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: EncounterCondition;
};

type EncounterConditionValueCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: EncounterConditionValue;
};

type EvolutionChainCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: EvolutionChain;
};

type EvolutionTriggerCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: EvolutionTrigger;
};

type GenerationCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Generation;
};

type PokedexCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Pokedex;
};

type VersionCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Version;
};

type VersionGroupCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: VersionGroup;
};

type ItemCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Item;
};

type ItemAttributeCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: ItemAttribute;
};

type ItemCategoryCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: ItemCategory;
};

type ItemFlingEffectCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: ItemFlingEffect;
};

type ItemPocketCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: ItemPocket;
};

type LocationCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Location;
};

type LocationAreaCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: LocationArea;
};

type PalParkAreaCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: PalParkArea;
};

type RegionCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Region;
};

type MachineCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Machine;
};

type MoveCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Move;
};

type MoveAilmentCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: MoveAilment;
};

type MoveBattleStyleCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: MoveBattleStyle;
};

type MoveCategoryCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: MoveCategory;
};

type MoveDamageClassCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: MoveDamageClass;
};

type MoveLearnMethodCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: MoveLearnMethod;
};

type MoveTargetCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: MoveTarget;
};

type AbilityCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Ability;
};

type CharacteristicCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Characteristic;
};

type EggGroupCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: EggGroup;
};

type GenderCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Gender;
};

type GrowthRateCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: GrowthRate;
};

type NatureCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Nature;
};

type PokeathlonStatCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: PokeathlonStat;
};

type PokemonCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Pokemon;
};

type LocationAreaEncounterCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: LocationAreaEncounter[];
};

type PokemonColorCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: PokemonColor;
};

type PokemonFormCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: PokemonForm;
};

type PokemonHabitatCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: PokemonHabitat;
};

type PokemonShapeCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: PokemonShape;
};

type PokemonSpeciesCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: PokemonSpecies;
};

type StatCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Stat;
};

type TypeCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Type;
};

type LanguageCache = {
  resourceList?: NamedAPIResourceList;
} & {
  [id: string]: Language;
};

type PokeApiCache = {
  BERRY: BerryCache;
  BERRY_FIRMNESS: BerryFirmnessCache;
  BERRY_FLAVOR: BerryFlavorCache;
  CONTEST_TYPE: ContestTypeCache;
  CONTEST_EFFECT: ContestEffectCache;
  SUPER_CONTEST_EFFECT: SuperContestEffectCache;
  ENCOUNTER_METHOD: EncounterMethodCache;
  ENCOUNTER_CONDITION: EncounterConditionCache;
  ENCOUNTER_CONDITION_VALUE: EncounterConditionValueCache;
  EVOLUTION_CHAIN: EvolutionChainCache;
  EVOLUTION_TRIGGER: EvolutionTriggerCache;
  GENERATION: GenerationCache;
  POKEDEX: PokedexCache;
  VERSION: VersionCache;
  VERSION_GROUP: VersionGroupCache;
  ITEM: ItemCache;
  ITEM_ATTRIBUTE: ItemAttributeCache;
  ITEM_CATEGORY: ItemCategoryCache;
  ITEM_FLING_EFFECT: ItemFlingEffectCache;
  ITEM_POCKET: ItemPocketCache;
  LOCATION: LocationCache;
  LOCATION_AREA: LocationAreaCache;
  PALPARK_AREA: PalParkAreaCache;
  REGION: RegionCache;
  MACHINE: MachineCache;
  MOVE: MoveCache;
  MOVE_AILMENT: MoveAilmentCache;
  MOVE_BATTLE_STYLE: MoveBattleStyleCache;
  MOVE_CATEGORY: MoveCategoryCache;
  MOVE_DAMAGE_CLASS: MoveDamageClassCache;
  MOVE_LEARN_METHOD: MoveLearnMethodCache;
  MOVE_TARGET: MoveTargetCache;
  ABILITY: AbilityCache;
  CHARACTERISTIC: CharacteristicCache;
  EGG_GROUP: EggGroupCache;
  GENDER: GenderCache;
  GROWTH_RATE: GrowthRateCache;
  NATURE: NatureCache;
  POKEATHLON_STAT: PokeathlonStatCache;
  POKEMON: PokemonCache;
  POKEMON_LOCATION_AREA: LocationAreaEncounterCache;
  POKEMON_COLOR: PokemonColorCache;
  POKEMON_FORM: PokemonFormCache;
  POKEMON_HABITAT: PokemonHabitatCache;
  POKEMON_SHAPE: PokemonShapeCache;
  POKEMON_SPECIES: PokemonSpeciesCache;
  STAT: StatCache;
  TYPE: TypeCache;
  LANGUAGE: LanguageCache;
};

export const pokeApiCache: PokeApiCache = {
  BERRY: {},
  BERRY_FIRMNESS: {},
  BERRY_FLAVOR: {},
  CONTEST_TYPE: {},
  CONTEST_EFFECT: {},
  SUPER_CONTEST_EFFECT: {},
  ENCOUNTER_METHOD: {},
  ENCOUNTER_CONDITION: {},
  ENCOUNTER_CONDITION_VALUE: {},
  EVOLUTION_CHAIN: {},
  EVOLUTION_TRIGGER: {},
  GENERATION: {},
  POKEDEX: {},
  VERSION: {},
  VERSION_GROUP: {},
  ITEM: {},
  ITEM_ATTRIBUTE: {},
  ITEM_CATEGORY: {},
  ITEM_FLING_EFFECT: {},
  ITEM_POCKET: {},
  LOCATION: {},
  LOCATION_AREA: {},
  PALPARK_AREA: {},
  REGION: {},
  MACHINE: {},
  MOVE: {},
  MOVE_AILMENT: {},
  MOVE_BATTLE_STYLE: {},
  MOVE_CATEGORY: {},
  MOVE_DAMAGE_CLASS: {},
  MOVE_LEARN_METHOD: {},
  MOVE_TARGET: {},
  ABILITY: {},
  CHARACTERISTIC: {},
  EGG_GROUP: {},
  GENDER: {},
  GROWTH_RATE: {},
  NATURE: {},
  POKEATHLON_STAT: {},
  POKEMON: {},
  POKEMON_LOCATION_AREA: {},
  POKEMON_COLOR: {},
  POKEMON_FORM: {},
  POKEMON_HABITAT: {},
  POKEMON_SHAPE: {},
  POKEMON_SPECIES: {},
  STAT: {},
  TYPE: {},
  LANGUAGE: {}
};
