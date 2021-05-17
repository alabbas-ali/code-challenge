import { DatePipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    providers: [DatePipe],
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

}
