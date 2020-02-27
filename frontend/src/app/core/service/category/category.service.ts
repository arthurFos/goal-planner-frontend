import { Injectable } from '@angular/core';
import { CategoryModule } from '../../../modules/category/category.module';
import { Observable } from 'rxjs';
import { Category } from '../../model/Category';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: CategoryModule
})
export class CategoryService {
private catagoryUrl: string;

constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    this.catagoryUrl = 'http://localhost:8091/category';
    return this.http.get<Category[]>(this.catagoryUrl);
  }

  getCategoryById(categoryId: string): Observable<Category> {
    this.catagoryUrl = 'http://localhost:8091/category/{categoryId}';
    return this.http.get<Category>(this.catagoryUrl);
  }

}
