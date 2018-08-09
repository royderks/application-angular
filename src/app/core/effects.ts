import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AppActions } from './actions';
import { catchError, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs/index';
import { debounceTime, tap } from 'rxjs/internal/operators';

@Injectable()
export class AppEffects {
  constructor(private actions: Actions) {}

  @Effect()
  public fetchData: Observable<any> = this.actions.ofType(AppActions.DATA_FETCH).pipe(
    debounceTime(1000),
    /* TODO: Create a different function for the API call */
    /* TODO: Make this more efficient, are all these switchMap needed? */
    switchMap(() => fetch('https://randomuser.me/api/?results=500')),
    switchMap((resp) => resp.json()),
    switchMap((json) => {
      return of({ type: AppActions.DATA_FETCH_SUCCESS, payload: json.results })
    }),
    catchError(error => console.log(error) || of({ type: AppActions.DATA_FETCH_ERROR }))
  );

  /* TODO: Find out how the store can be used to trigger Effects to retrieve the data from the store */
}
