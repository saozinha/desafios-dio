import { Component, OnInit } from '@angular/core';
import { Course } from './course'
import { CourseService } from './course.service';

@Component({ 
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  filteredCourses: Course[] = [];

  _courses: Course[] = [];
    
  _filterBy: string;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveAll(); 
  }

  retrieveAll(): void {
     this.courseService.retrieveAll().subscribe({
        next: courses => {
           this._courses = courses;
           this.filteredCourses = this._courses;
        },
        error: err => console.log('ERROR ', err)
     })
  } 
  deleteById(courseId: number): void {
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log("Deleted whit success");
        this.retrieveAll();
      },
      error: () => console.log("Error when deleteById")
    })

  }

  set filter (value: string) {
    this._filterBy = value; 
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }

}
