import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from '../../model/Goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

constructor() { }

  getAllGoals(): Observable<Goal[]> {

  }

  getGoalById(goalId: String): Observable<Goal> {

  }

  getGoalByCustomer(customerId: String): Observable<Goal[]> {

  } 

  getGoalByCategory(categoryId: String): Observable<Goal[]> {

  }

  createGoal(goal: Goal): Observable<Goal> {

  } 

  updateGoal(goalId: String): Observable<Goal> {

  } 

  deleteGoal(goalId: String) {

  } 

}
