import { IFood } from '../../models/food.interface';

export interface IFoodSate {
    foodList: IFood[];
    searchTerm: String
}

export const initialFoodState: IFoodSate = {
    foodList: null,
    searchTerm: null
}

// export function getInitialFoodState():IFoodSate{
//     return initialFoodState;
// }