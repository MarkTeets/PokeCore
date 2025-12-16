import React, { Dispatch, SetStateAction, ReactNode, MutableRefObject, ComponentType } from 'react';

// Types
import { User } from '../types';

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

export type ResetStateOnRefresh = (
  puzzleNumber: number,
  user: User,
  puzzleCollection: PuzzleCollection,
  setInitialSquares: SetInitialSquares,
  setFilledSquares: SetFilledSquares,
  setPencilSquares: SetPencilSquares
) => void;

export type OnNumberChange = (
  buttonVal: PuzzleVal,
  pencilMode: boolean,
  clickedSquare: ClickedSquare,
  filledSquares: FilledSquares,
  setFilledSquares: SetFilledSquares,
  pencilSquares: PencilSquares,
  setPencilSquares: SetPencilSquares
) => void;

export type OnNumberClick = (
  e: React.MouseEvent<HTMLButtonElement>,
  pencilMode: boolean,
  clickedSquare: ClickedSquare,
  filledSquares: FilledSquares,
  setFilledSquares: SetFilledSquares,
  pencilSquares: PencilSquares,
  setPencilSquares: SetPencilSquares
) => void;

export type OnNumberDelete = (
  pencilMode: boolean,
  clickedSquare: ClickedSquare,
  filledSquares: FilledSquares,
  setFilledSquares: SetFilledSquares,
  pencilSquares: PencilSquares,
  setPencilSquares: SetPencilSquares
) => void;

export type OnPuzzleKeyDown = (
  e: React.KeyboardEvent<HTMLElement>,
  pencilMode: boolean,
  clickedSquare: ClickedSquare,
  filledSquares: FilledSquares,
  setFilledSquares: SetFilledSquares,
  pencilSquares: PencilSquares,
  setPencilSquares: SetPencilSquares
) => void;

export type MakeButtons = (
  pencilMode: boolean,
  clickedSquare: ClickedSquare,
  filledSquares: FilledSquares,
  setFilledSquares: SetFilledSquares,
  pencilSquares: PencilSquares,
  setPencilSquares: SetPencilSquares
) => React.JSX.Element[];

export type AutofillPencilSquares = (
  filledSquares: FilledSquares,
  setPencilSquares: SetPencilSquares
) => void;

export type SignInWithSession = (
  setUser: SetUser,
  setPuzzleCollection: SetPuzzleCollection
) => Promise<boolean>;

//---- Component Props ---------------------------------------------------------------------------
export type SideBarProps = {
  collapseSideBar: () => void;
};

export type SideBarContainerProps = {
  SideBar: ComponentType<SideBarProps>;
};

export type SideBarSectionContainerProps = {
  children: ReactNode;
  title: string;
  defaultExpanded?: boolean;
};

export type SettingsToggleProps = {
  label: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

export type PuzzleNumberProp = {
  puzzleNumber?: number;
};

export type SavedPuzzleGraphicProps = {
  progress: string;
};

export type BoxUnitContainerProps = {
  boxUnit: Set<SquareId>;
};

export type SquareContainerProps = {
  squareId: SquareId;
};

export type SquareProps = {
  squareId: SquareId;
  squareClasses: string;
  onSquareClick: OnSquareClick;
};

export type PencilSquareProps = {
  squareId: SquareId;
  onSquareClick: OnSquareClick;
};
*/
