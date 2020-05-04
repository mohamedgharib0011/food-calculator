import { IFoodSate, initialFoodState } from './food.state';

export interface ICalorieCounterState{
    food:IFoodSate
}

export const initialCalorieCounterState:ICalorieCounterState={
    food:initialFoodState
};

export function getTnitialState():ICalorieCounterState{
    return initialCalorieCounterState;
}


