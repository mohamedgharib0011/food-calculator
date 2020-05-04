import { initialFoodState, IFoodSate } from '../state/food.state';
import { FoodActions, EFoodActions } from '../actions/calorie-counter.actions';


export const foodReducer = (state = initialFoodState, action: FoodActions):IFoodSate => {
    switch (action.type) {
        case EFoodActions.SearchFoods: {
            return {
                ...state,
                searchTerm: action.payload
            }
        }

        case EFoodActions.LoadInitFoods:{
            return {
                ...state,
                foodList:action.payload
            }
        }

        case EFoodActions.SearchFoodsSuccess: {
            return {
                ...state,
                foodList: action.payload
            }
        }

        default: state;

    }
};