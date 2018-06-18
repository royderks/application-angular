import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AppActions } from './actions';
import { catchError, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs/index';
import { debounceTime, tap } from 'rxjs/internal/operators';

@Injectable()
export class AppEffects {
  constructor(private actions: Actions) {
  }

  @Effect()
  public fetchData: Observable<any> = this.actions.ofType(AppActions.DATA_FETCH).pipe(
    debounceTime(1000),
    switchMap(() => of({ type: AppActions.DATA_FETCH_SUCCESS, payload: [ 1, 2, 3, 4, 5, 6, 6 ] })),
    catchError(error => console.log(error) || of({ type: AppActions.DATA_FETCH_ERROR }))
  );
}
