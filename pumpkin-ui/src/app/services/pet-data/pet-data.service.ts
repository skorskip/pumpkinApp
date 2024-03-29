import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { PetDataObject } from './pet-data-object';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PetDataService {
  recentlyAdded = new PetDataObject();
  private petsUrl = environment.serviceURL + 'pets';  // URL to web api


  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  /* Get all pets as PetDataObject types */
  getPets(): Observable<PetDataObject[]> {
    const url = `${this.petsUrl}`;
    return this.http.get<PetDataObject[]>(url).pipe(
      tap(_ => console.log(`fetched pets`)),
      catchError(this.handleError<PetDataObject[]>(`fetched pets`))
    );
  }

  /* Add a pet as PetDataObject type, return true if success, false if error */
  addPet(pet: PetDataObject): Observable<boolean> {
    const url = `${this.petsUrl}`;
    pet.id = Math.round(Math.random() * 500);
    return this.http.post<any>(url, pet, httpOptions).pipe(
      map((response) => {
        console.log(`adding pet`);
        if(response.id == pet.id) {
          //keep track of most recently added to display
          this.recentlyAdded = response;
          return true;
        } else {
          return false;
        }
      }),
      catchError(this.handleError<boolean>(`adding pet`))
    );
  }

  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.snackBar.open(error.statusText.toLowerCase(),'', {duration:3000});
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
