import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { DataService } from '@@services/data.service'
import { Employee } from '@@model/employee'
import { SetLoading , GetLoading } from '@@store/loading'
import { CoreState } from '@@store/index'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    loading$: Observable<boolean>
    employees: Array<Employee>
    loadingError: boolean = false

    constructor(
        private store: Store<CoreState>,
        private data: DataService,
    ) {
        this.store
            .select<boolean>(GetLoading)
            .subscribe(loading => {
                console.log(loading)
            })
    }

    ngOnInit(): void { 
        this.data
            .getALL()
            .subscribe((list:Array<Employee>): void => {  
                this.store.dispatch(new SetLoading(false))  
                this.employees = list
            },
            (error: any) => {
                this.store.dispatch(new SetLoading(false))
                this.loadingError = true
                console.log(error)
            }) 
    }

    showDetail(item: any) {

    }
}
