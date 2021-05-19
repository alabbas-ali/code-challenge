import { Component, OnInit } from '@angular/core'
import { trigger, style, animate, transition, state } from '@angular/animations'
import { Store } from '@ngrx/store'

import { DataService } from '@@services/data.service'
import { Employee } from '@@model/employee'
import { SetLoading, GetLoadingState, LoadingState } from '@@store/loading'
import { CoreState } from '@@store/index'
import { SetLoadingError } from '@@store/loading/loading.actions'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('inOutAnimation', [
            state('in', style({opacity: 1})),
            transition(':enter', [
                style({opacity: 0}),
                animate(800)
            ]),
            transition(':leave', animate(50, style({opacity: 0})))
        ])
    ]
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
            .subscribe((list: Array<Employee>): void => {
                setTimeout(() => {
                    this.store.dispatch(new SetLoading(false))
                    this.employees = list
                }, 800)
            },
                (_error: any) => {
                    this.store.dispatch(new SetLoadingError(true))
                })
    }

    showDetail(id: string): void {

    }
}
