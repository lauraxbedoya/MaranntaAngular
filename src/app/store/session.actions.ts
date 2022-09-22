import { createAction, props } from '@ngrx/store';
import { AdminType, UserType } from 'src/utils/types';

export const storeUser = createAction('[Session] Store User',
  props<any>())