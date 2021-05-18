import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { DataService } from '@@services/data.service'
import { LoadingState } from '@@store/loading'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    loading$: Observable<boolean>

    constructor(
        private store: Store<LoadingState>,
        private data: DataService,
    ) { 
        this.loading$ = store.select('loading')
    }

    ngOnInit(): void { }

    showDetail(item: any) {

    }
}
