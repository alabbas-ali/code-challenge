import { Component, OnInit } from '@angular/core'
import { MDBModalRef } from 'angular-bootstrap-md'
import { Subject } from 'rxjs'

@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

    confirmation: Subject<boolean> = new Subject()

    heading: string
    content: string
    constructor(
        public modalRef: MDBModalRef
    ) { }

    onContirm() {
        this.confirmation.next(true)
        this.modalRef.hide()
    }

}
