import { Component, OnInit } from "@angular/core";
import { Course } from './course'

@Component({
    selector: 'app-course-list',
    templateUrl: './index.component.html',
    styleUrls: ['./style.component.css']
})
export class CourseListComponent implements OnInit {
    
    // criamos uma propriedade Course e que é um array do tipo course
    courses : Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id:1,
                name: 'angular',
                imageUrl: '/assets/images/animations.png',
                price: 99.99,
                code: 'xps.3',
                duration: 120,
                rating: 3.4,
                releaseDate: '24/4/2021'
            },
            {
                id:2,
                name: 'react',
                imageUrl: '/assets/images/http.png',
                price: 8.99,
                code: 'fdfd.5',
                duration: 190,
                rating: 5,
                releaseDate: '24/4/2021'
            }
        ]
    }

    

}