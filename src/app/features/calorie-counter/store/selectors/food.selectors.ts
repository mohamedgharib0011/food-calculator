import { ICalorieCounterState, initialCalorieCounterState } from "../state/calorie-counter.state";
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IFoodSate } from '../state/food.state';

const selectFood = createFeatureSelector<IFoodSate>('food');

export const selectSearchTerm = createSelector(
    selectFood,
    (state: IFoodSate) => state.searchTerm
)

export const selectFoodList = createSelector(
    selectFood,
    (state: IFoodSate) => state.foodList
)