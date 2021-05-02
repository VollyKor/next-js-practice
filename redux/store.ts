import { MakeStore, createWrapper } from 'next-redux-wrapper'
import { configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit'
import { Action } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'

import postsReducer from './posts'
import { State } from '../typescript/types'

export const makeStore: MakeStore<State> = () =>
  configureStore({
    reducer: {
      posts: postsReducer,
    },
    middleware: [...getDefaultMiddleware(), thunk],
    devTools: process.env.NODE_ENV !== 'production',
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export type AppThunkDispatch = ThunkDispatch<any, void, any>

export const wrapper = createWrapper<State>(makeStore)
