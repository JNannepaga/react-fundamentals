import React from 'react';

const ReducerContext =  React.createContext();

export const ReducerProvider = ReducerContext.Provider;
export const ReducerConsumer = ReducerContext.Consumer;

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export default ReducerContext;