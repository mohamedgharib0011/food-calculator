import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutRouterModule } from './about-router.module';

@NgModule({
  imports: [
    CommonModule, AboutRouterModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
