import { createAction, props } from '@ngrx/store';

export const storeUser = createAction('[Session] Store User',
  props<any>())