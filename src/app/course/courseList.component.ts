import { Component, OnInit } from "@angular/core";
import { Course } from './course'
import { CourseServece } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './index.component.html',
    styleUrls: ['./style.component.css']
})
export class CourseListComponent implements OnInit {
    
    // atraves desse construtor ele faz que  seja injetado via injeção de depedencia
    constructor(private _courseService: CourseServece){

    }
    // criamos uma propriedade Course e que é um array do tipo course
    courses : Course[] = [];

    ngOnInit(): void {
        
        
        this.courses = this._courseService.retriveAll()
        
    }

    

}