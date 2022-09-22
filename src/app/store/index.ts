import { createSelector } from '@ngrx/store';
import { SessionStateType } from './session.reducer';
 
export interface AppState {
  session: SessionStateType;
}
 
export const selectSession = (state: AppState) => state.session;
 
export const selectSessionUserInfo = createSelector(
  selectSession,
  (state: SessionStateType) => state.userInfo
);