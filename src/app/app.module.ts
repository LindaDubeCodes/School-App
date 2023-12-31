import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoursesComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
