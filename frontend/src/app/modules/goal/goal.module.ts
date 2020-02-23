import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from "./goal-routing.module";
import { GoalComponent } from './goal.component';

@NgModule({
  imports: [
    CommonModule,
    GoalRoutingModule
  ],
  declarations: [GoalComponent]
})
export class GoalModule { }
