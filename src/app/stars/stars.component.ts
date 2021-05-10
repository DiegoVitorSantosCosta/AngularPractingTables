import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector:'app-stars',
    templateUrl:'./stars.component.html',
    styleUrls: ['./stars.component.css']
})

// OnChanges é executado quando tem mudanças no components.
export class starsComponent implements OnChanges {

    @Input()
    rating: number = 0;
    starWidth: number;

    ngOnChanges() {
        this.starWidth = this.rating * 74 / 5
        

    }
}