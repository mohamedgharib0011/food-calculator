import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { ICalorieCounterState } from '../../store/state/calorie-counter.state';
import { SearchFoods, LoadInitFoods } from '../../store/actions/calorie-counter.actions';
import { IFood } from '../../models/food.interface';
import { selectFoodList } from '../../store/selectors/food.selectors';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';



@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {

  model: any = {}
  page = 1;
  pageSize = 4;

  foodListSize = 0;
  foodList: IFood[] = [];
  food$ = this._store.pipe(select(selectFoodList));

  constructor(private _store: Store<ICalorieCounterState>) {
  }

  searchFood() {
    console.log(this.model.searchTerm);
    this._store.dispatch(new SearchFoods(this.model.searchTerm))
  }

  get dataSource(): IFood[] {
    return this.foodList.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit() {
    this._store.dispatch(new LoadInitFoods([]));
    this.food$.subscribe(foodList => {
      this.foodListSize = foodList.length;
      this.foodList = foodList;
    });
  }

  ngOnDestroy(): void {
    this.food$.subscribe();
  }

}
