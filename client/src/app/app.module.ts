import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './layout/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatExpansionModule} from "@angular/material/expansion";
import {HeaderComponent} from './forms/header/header.component';
import {FooterComponent} from './forms/footer/footer.component';
import {BodyComponent} from './forms/body/body.component';
import {ExpensesComponent} from './forms/expenses/expenses.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ContentComponent } from './layout/content/content.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ExpensesComponent,
    ContentComponent,
    LayoutFooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
