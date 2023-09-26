import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

export abstract class BaseService<T> {
  apiUrl: string = 'https://localhost:7203/api';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(protected http: HttpClient, action:string)
   {

    if(action)
      if(action.length > 0)
        this.apiUrl = `${this.apiUrl}/${action}`;
   }
  // Create
  create(t: T): Observable<T> {

    console.log(t);
    let API_URL = `${this.apiUrl}`;
    console.log(API_URL);

    return this.http.post<T>(API_URL, t).pipe(catchError(this.error));
  }
  // Read
  getAll() : Observable<T[]>  {
    return this.http.get<T[]>(`${this.apiUrl}`);
  }
  getById(id: string): Observable<T> {
    const url = `${this.apiUrl}/employee/${id}`;
    return this.http.get<T>(url);
  }
  // Update
  update(id: string, t:T): Observable<T>{
    let API_URL = `${this.apiUrl}/${id}`;
    return this.http
      .put<T>(API_URL, t, { headers: this.headers })
      .pipe(catchError(this.error));
  }
  // Delete
  delete(id: string): Observable<T> {
    var API_URL = `${this.apiUrl}/${id}`;
    return this.http.delete<T>(API_URL).pipe(catchError(this.error));
  }
  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => {
      return errorMessage;
    });
  }
}
