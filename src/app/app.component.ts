import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSelectors } from './core/selectors';
import { AppActions } from './core/actions';
import { State } from './core/reducer-map';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  /* TODO: Define classes for <any> */
  loading: Observable<boolean>;
  data: Observable<Array<any>>;
  query: Observable<Object>;
  filters: Observable<Array<any>>;

  constructor(private store: Store<State>) {}

  changeSearch(event: Event) {
    const search = (event.target) ? (<HTMLInputElement>event.target).value : null;
    this.store.dispatch({ type: AppActions.DATA_FILTER, payload: { search } });
  }

  changeFilter(event: Event) {
    if (event.target && (<HTMLInputElement>event.target).name) {
      this.store.dispatch({
        type: AppActions.DATA_FILTER,
        payload: { [(<HTMLInputElement>event.target).name]: (<HTMLInputElement>event.target).value }
      });
    }
  }

  ngOnInit() {
    this.store.dispatch({ type: AppActions.DATA_FETCH });

    this.loading = this.store.select(AppSelectors.loading);
    this.data = this.store.select(AppSelectors.data);
    this.query = this.store.select(AppSelectors.query);
    this.filters = this.store.select(AppSelectors.filters);
  }
}
