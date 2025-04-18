// Packages
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

// Types
import { User, WelcomeResponse } from '../../../types';
import { UserContextValue } from '../../frontendTypes';

// Context
import { userContext } from '../../context';

// Main component
const Home = () => {
  const userListData = useLoaderData() as User[];
  const { user, setUser } = useContext<UserContextValue>(userContext);

  const handleChange = (event) => {
    console.log('event.target.value', event.target.value);
    setUser(event.target.value);
  };

  return (
    <div className='home-page'>
      <h1>Welcome Trainer!</h1>
      <div>user:{JSON.stringify(user)}</div>
      <label htmlFor='username-select'>Please select your user</label>
      <select
        name='username'
        id='username-select'
        value={user ? user.id : ''}
        onChange={handleChange}
      >
        {generateOptions(userListData)}
      </select>
    </div>
  );
};

export default Home;

// Loaders
export const userLoader = async () => {
  // Request list of users from backend
  const res: Response = await fetch('/api/user/get-userList');

  // If the response status isn't in 200s, inform user
  if (!res.ok) {
    return { error: 'Submission failed, please try again' };
  }

  // The request response has status 200, convert the response back to JS from JSON and proceed
  const response = (await res.json()) as WelcomeResponse;

  if (response.status === 'valid') {
    console.log(response);
    return response.userList;
  }

  return [
    { id: 1, username: 'mark', display_name: 'Mark' },
    { id: 2, username: 'amanda', display_name: 'Amanda' },
    { id: 3, username: 'sample', display_name: 'Sample' }
  ];
};

export const userLoaderTest = () => {
  return [
    { id: 1, username: 'mark', display_name: 'Mark' },
    { id: 2, username: 'amanda', display_name: 'Amanda' }
  ];
};

// Helper Functions
const generateOptions = (userList: User[]): JSX.Element[] => {
  if (!userList) return [];
  const options = [] as JSX.Element[];
  options.push(
    <option value='' disabled key='user-select-0'>
      Please choose a user
    </option>
  );
  userList.forEach((user) => {
    options.push(
      <option value={user.id} key={`user-select-${user.id}`}>
        {user.username}
      </option>
    );
  });
  return options;
};
