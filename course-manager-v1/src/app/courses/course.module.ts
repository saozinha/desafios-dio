import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../pipe/replace-pipe";
import { StarComponent } from "../star/star/star.component";
import { CourseInfoComponent } from "./course-info.component";
import { CoursesListComponent } from "./courses-list.component";

@NgModule({
    declarations: [
        StarComponent,  
        CoursesListComponent,
        CourseInfoComponent,
        ReplacePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CoursesListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule {

}