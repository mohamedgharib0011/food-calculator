import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';


import { ICalorieCounterState } from '../state/calorie-counter.state';
import { CalorieCounterService } from '../../services/calorie-counter.service';
import { EFoodActions, SearchFoodsSuccess, SearchFoods } from '../actions/calorie-counter.actions';
import { switchMap, map } from 'rxjs/operators';
import { IFood } from '../../models/food.interface';
import { of } from 'rxjs';

@Injectable()
export class CalorieCounterEffets {

    constructor(
        private _actions$: Actions,
        private _store: Store<ICalorieCounterState>,
        private _calorieCounterService:CalorieCounterService
    ) { }

    @Effect()
    searchFood$=this._actions$.pipe(
        ofType<SearchFoods>(EFoodActions.SearchFoods),
        map((action=>action.payload)),
        switchMap((searchTerm:String)=>this._calorieCounterService.searchFood(searchTerm))
        ,
        switchMap((users:IFood[])=>of(new SearchFoodsSuccess(users)))
    );


}