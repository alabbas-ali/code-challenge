import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { DataService } from '@@services/data.service'
import { Employee } from '@@model/employee'
import { SetLoading, GetLoadingState, LoadingState } from '@@store/loading'
import { CoreState } from '@@store/index'
import { Observable } from 'rxjs'
import { SetLoadingError } from '@@store/loading/loading.actions'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    loadingState: LoadingState
    employees: Array<Employee>

    constructor(
        private store: Store<CoreState>,
        private data: DataService,
    ) {
        this.store
            .select<LoadingState>(GetLoadingState)
            .subscribe(state => {
                this.loadingState = state
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
                this.store.dispatch(new SetLoadingError(true))
                console.log('error',  error)
            }) 
    }

    showDetail(item: any) {

    }
}
