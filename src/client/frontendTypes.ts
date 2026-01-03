import React, { Dispatch, SetStateAction, ReactNode, MutableRefObject, ComponentType } from 'react';

// Types
import { User } from '../types';
import { TypeDisplayName } from '../utils/pokeApi/constants';

export type OffenseOrDefense = 'OFFENSE' | 'DEFENSE';

//---- Dispatch Types ----------------------------------------------------------------------------
export type SetUser = Dispatch<SetStateAction<User>>;

//---- Context Types ----------------------------------------------------------------------------
/**
 * These are collections of state that will be placed in context so they can be accessed by
 * components via the useContext hook without needing to prop drill through every intermediate
 * component
 */
export type UserContextValue = {
  user: User;
  setUser: SetUser;
};

export type PokeDataContextValue = {
  typeDict: any;
  setTypeDict: React.Dispatch<any>;
};

export type PokeTeamsContextValue = {
  pokeTeams: any;
  setPokeTeams: React.Dispatch<any>;
};

export type TeamList = {
  [key: number]: Team;
};

export type Team = Pokemon[];

export type Pokemon = {
  name: string;
};

//---- Loader types ------------------------------------------------------------------------------
export type TypeDictLoader = {
  error?: string;
  typeDict?: any;
};

//---- Component Functions -----------------------------------------------------------------------
/*
export type OnSquareClick = (event: React.MouseEvent<HTMLElement>) => void;

export type InitializeSquares = (
  puzzleNumber: number,
  user: User,
  puzzleCollection: PuzzleCollection
) => InitialSquares;
*/

//---- Component Props ---------------------------------------------------------------------------
export type TypeCalcDisplayBlockProps = {
  name: string;
  multiplier: number;
};

export type TypeCalcDisplayProps = {
  typeCalcs: TypeCalcDisplayBlockProps[];
};

export type TypeCalcRowProps = {
  offenseOrDefense: OffenseOrDefense;
  typeList: TypeDisplayName[];
};

export type TypeSummaryProps = {
  typeList: TypeDisplayName[];
};
