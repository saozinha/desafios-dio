import { Course } from "./course";
import { Injectable } from '@angular/core'; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
 
@Injectable({
    providedIn: 'root'
})
export class CourseService {
 
   private coursesUrl: string = 'http://localhost:3000/COURSES';   
    
   constructor(private httpClient: HttpClient){}


    retrieveAll(): Observable<Course[]> { 
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retrieveById(id: number): Observable<Course>  { 
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    save(course: Course) {
        if(course.id) {
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course) 
        } else {
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course) 
        }
    }

    deleteById(id: number): Observable<any> {
         return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }

}