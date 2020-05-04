import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap/';

import { CalorieCounterEffets } from './store/effects/calorie-counter.effects';
import { FoodSearchComponent } from './components/food-search/food-search.component';
import { CalorieCounterRouterModule } from './calorie-counter-router.module';
import { calorieCounterReducer } from './store/reducer/calorie-counter.reducers';
import { CalorieCounterService } from './services/calorie-counter.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, CalorieCounterRouterModule, 
    EffectsModule.forRoot([CalorieCounterEffets]), 
    StoreModule.forRoot(calorieCounterReducer), 
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [FoodSearchComponent],
  providers:[CalorieCounterService]
})
export class CalorieCounterModule { }
