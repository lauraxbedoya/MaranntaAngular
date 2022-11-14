import { createReducer, on } from "@ngrx/store";
import { UserType } from "src/utils/types";
import { storeUser } from "./session.actions";

export const initialState: SessionStateType = {
  userInfo: null
};

const sessionReducer = createReducer(initialState,
  on(storeUser, (state, payload): SessionStateType => {
    return ({
    ...state,
    userInfo: payload
  }
  )
  }),
);
 
// export function sessionReducer(state: any, action: ActionType) {
//   return _sessionReducer(state, action);
// }

export type SessionStateType = {
  userInfo: ( UserType ) | null,
}

export default sessionReducer;