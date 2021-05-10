import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course/courseList.component'
import { starsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    starsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
