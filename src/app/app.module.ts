import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import { BaseComponent } from './base/base.component';
import {Comp1Module} from './pages/comp1/comp1.module';
import {Comp2Module} from './pages/comp2/comp2.module';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BaseComponent,
        children: [
          {
            path: '1',
            loadChildren: () => import('./pages/comp1/comp1.module').then(m => m.Comp1Module),
          },
          {
            path: '2',
            loadChildren: () => import('./pages/comp2/comp2.module').then(m => m.Comp2Module),
          },
          { path: '', redirectTo: '1', pathMatch: 'full' },
          { path: '**', redirectTo: '1', pathMatch: 'full' },
        ],
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
