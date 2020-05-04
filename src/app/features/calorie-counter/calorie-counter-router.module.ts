import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FoodSearchComponent } from "./components/food-search/food-search.component";


const routes: Routes = [
    {
        path: '',
        component: FoodSearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CalorieCounterRouterModule {}
