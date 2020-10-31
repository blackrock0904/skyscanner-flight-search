import { createStore } from 'redux';
import { reducer } from './reducer';
import { db } from '../db/db';

export const store = createStore(reducer, db);
