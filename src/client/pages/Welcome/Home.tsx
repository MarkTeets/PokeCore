// Packages
import React, { useContext } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';

// Types
import { User, WelcomeResponse } from '../../../types';
import { UserContextValue } from '../../frontendTypes';

// Context
import { userContext } from '../../context';

// Main component
const Home = () => {
  const userListData = useLoaderData() as User[];
  const navigate = useNavigate();
  const { user, setUser } = useContext<UserContextValue>(userContext);

  const handleChange = (event) => {
    console.log('event.target.value', event.target.value);
    setUser(event.target.value);
  };

  const handleClick = () => {
    return navigate('/pokemon');
  };

  return (
    <div className='home-page'>
      <h1>Welcome Trainer!</h1>
      {/* <div>user:{JSON.stringify(user)}</div> */}
      <label htmlFor='username-select'>Please select your user</label>
      <select
        name='username'
        id='username-select'
        value={user ? user.app_user_id : ''}
        onChange={handleChange}
      >
        {generateOptions(userListData)}
      </select>
      <div>{user && <button onClick={handleClick}>Let&apos;s fricken go!</button>}</div>
    </div>
  );
};

export default Home;

// Loaders
export const userLoader = async () => {
  // Request list of users from backend
  const response: Response = await fetch('/api/user/get-userList');

  // If the response status isn't in 200s, inform user
  if (!response.ok) {
    return { error: 'Retrieval failed, please try again' };
  }

  // The request response has status 200, convert the response back to JS from JSON and proceed
  const res = (await response.json()) as WelcomeResponse;

  if (res.status === 'valid') {
    console.log(res);
    return res.userList;
  }

  return [];
};

export const userLoaderTest = () => {
  return [
    { app_user_id: 1, username: 'mark', display_name: 'Mark' },
    { app_user_id: 2, username: 'amanda', display_name: 'Amanda' }
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
    console.log(user.app_user_id);
    options.push(
      <option value={user.app_user_id} key={`user-select-${user.app_user_id}`}>
        {user.username}
      </option>
    );
  });
  return options;
};
