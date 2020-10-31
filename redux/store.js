import React from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const initialState = {}
export const store = createStore(reducer, initialState, composeWithDevTools());
