import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses/courses-list.component';
import { StarComponent } from './star/star/star.component';
import { ReplacePipe } from './pipe/replace-pipe';
import { NavBarComponent } from './nav-bar/navBar.component';
import { RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './errors/error-not-found/error-not-found.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,  
    NavBarComponent, 
    ErrorNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**' , component: ErrorNotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
