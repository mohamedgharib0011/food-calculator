import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const routes:Routes=[
    {
        path:'',
        redirectTo:'about',
        pathMatch:'full'
    },
    {
        path:'about',
        loadChildren:()=>import('./features/about/about.module').then(m=>m.AboutModule)
    },
    {
        path:'calorie-couter',
        loadChildren:()=>import('./features/calorie-counter/calorie-counter.module').then(m=>m.CalorieCounterModule)
    },
    {
        path:'**',
        redirectTo:'about'
    }


]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouterModule{}