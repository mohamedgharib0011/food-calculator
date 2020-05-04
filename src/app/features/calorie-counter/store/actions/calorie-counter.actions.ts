import { Action } from '@ngrx/store';
import { IFood } from '../../models/food.interface';

export enum EFoodActions{
    SearchFoods='[Food] Get Foods',
    SearchFoodsSuccess='[Food] Search Food Success',
    LoadInitFoods='[Food] load Init Food',       
}

export class LoadInitFoods implements Action{
    public readonly type= EFoodActions.LoadInitFoods;
    constructor(public payload:IFood[]){}
}

export class SearchFoods implements Action {
    public readonly type= EFoodActions.SearchFoods;
    constructor(public payload:String){}
}

export class SearchFoodsSuccess implements Action{
    public readonly type=EFoodActions.SearchFoodsSuccess;
    constructor(public payload:IFood[]){}
}



export type FoodActions=SearchFoods | SearchFoodsSuccess | LoadInitFoods;