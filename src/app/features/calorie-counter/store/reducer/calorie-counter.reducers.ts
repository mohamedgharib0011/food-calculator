import { ICalorieCounterState } from '../state/calorie-counter.state'
import { ActionReducerMap } from '@ngrx/store';
import { foodReducer } from './food.reducers';

export const calorieCounterReducer: ActionReducerMap<ICalorieCounterState, any> = {
    food: foodReducer
}


