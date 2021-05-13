import React from 'react';

const UserContext = React.createContext();
const AdminContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

const AdminProvider = AdminContext.Provider;
const AdminConsumer = AdminContext.Consumer;

export {UserContext, AdminContext, UserProvider, UserConsumer, AdminProvider, AdminConsumer}