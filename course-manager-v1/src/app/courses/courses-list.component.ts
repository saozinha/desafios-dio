import { Component, OnInit } from '@angular/core';
import { Course } from './course'

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        name : 'Angular Forms',
        imageUrl: '/assets/images/angular.png',
        price: 99.99 ,
        code: 'ANG-001',
        duration: 50,
        rating: 4.0,
        releaseDate: 'Agust, 4, 2021 '
      },
      {
        id: 2,
        name : 'Java reativo',
        imageUrl: '/assets/images/java.png',
        price: 299.99 ,
        code: 'JAVA-004',
        duration: 100,
        rating: 3.0,
        releaseDate: 'Agust, 4, 2021 '
      }
    ]
  }

}
