import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSelectors } from './core/selectors';
import { AppActions } from './core/actions';
import { State } from './core/reducer-map';
import { Observable } from 'rxjs/index';
import { tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  loading: Observable<boolean>;
  data: Observable<Array<any>>;

  constructor(private store: Store<State>) {

  }

  ngOnInit() {
    this.store.dispatch({ type: AppActions.DATA_FETCH });

    this.loading = this.store.select(AppSelectors.loading);
    this.data = this.store.select(AppSelectors.data);
  }
}
