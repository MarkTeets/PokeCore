/** App User
 *
 * @type User: object - holds all info related to a user required for frontend.
 * It can also be null before the data is populated.
 * @member id: number - a unique number assigned by sql
 * @member username: string - a unique name
 * @member displayName: string - a non-unique name used visible to user in frontend of application
 * numbers, and the values are objects which hold the puzzle number and a progress string
 */
export type User = {
  app_user_id: number;
  username: string;
  displayName: string;
} | null;

export type WelcomeResponse = {
  status: string;
  userList?: User[];
};

export type PokeDataResponse = {
  status: string;
  pokeData: any;
};

type LoadState = 'IDLE' | 'LOADING' | 'FAILED' | 'SUCCESS';

export type ResourceResponsePackage<T> = {
  status: LoadState;
  data: T | null;
  error: string | null;
};
