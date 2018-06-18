import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './core/effects';
import { metaReducers, reducers } from './core/reducer-map';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([ AppEffects ]),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
