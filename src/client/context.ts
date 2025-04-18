import { createContext } from 'react';

// Types
import { UserContextValue } from './frontendTypes';

// Context
export const userContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {}
});
