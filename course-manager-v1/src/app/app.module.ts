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

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    StarComponent, 
    ReplacePipe,
    NavBarComponent,
    CourseInfoComponent,
    ErrorNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CoursesListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
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
