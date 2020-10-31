// import React from 'react';
import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';
import { db } from '../db/db';

export const store = createStore(reducer, db);
