import React from 'react';

const UserContext = React.createContext('admin');
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserContext, UserProvider, UserConsumer};