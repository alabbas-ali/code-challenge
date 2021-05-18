import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { DataService } from '@@services/data.service'
import { LoadingState } from '@@store/loading'
import { Employee } from '@@model/employee'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    loading$: Observable<boolean>
    employees: Array<Employee>

    constructor(
        private store: Store<LoadingState>,
        private data: DataService,
    ) { 
        this.loading$ = this.store.select('loading')
    }

    ngOnInit(): void { 
        this.data
            .getALL()
            .subscribe((list:Array<Employee>): void => {    
                this.employees = list
            },
            (error: any) => {
                console.log(error)
            }) 
    }

    showDetail(item: any) {

    }
}
