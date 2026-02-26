import { authReducer } from "@/features/auth/store";
import { combineReducers } from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;