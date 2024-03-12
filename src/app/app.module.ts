import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { MyButtonComponent } from './components/my-button/my-button.component';

const routes: Routes = [{ path: '', component: PageHomeComponent }];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    NavBarComponent,
    PageHomeComponent,
    MyButtonComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
