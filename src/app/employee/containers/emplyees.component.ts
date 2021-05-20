import { Component, OnInit } from '@angular/core'
import { 
    animate, 
    state, 
    style, 
    transition, 
    trigger 
} from '@angular/animations'
import { Store, select } from '@ngrx/store'
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md'
import { take, map } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { ConfirmModalComponent } from '@@shared/components/confirm-modal/confirm-modal.component'

import { Employee } from '../model/employee'
import { getAllLoaded, getEmployees } from '../store/employees.selectors'
import * as fromEmployees from './../store/employees.actions'
import { EmployeeModalComponent } from '../components/employee-modal/employee-modal.component'
import { EmployeesState } from '../store/employees.state'

@Component({
    selector: 'app-emplyees',
    templateUrl: './emplyees.component.html',
    styleUrls: ['./emplyees.component.scss'],
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
export class EmployeesComponent implements OnInit {
    employees$: Observable<Array<Employee> | null>
    isLoading$: Observable<boolean>
    modalRef: MDBModalRef

    modalConfig = {
        class: 'modal-dialog-centered'
    }

    constructor(
        private store: Store<EmployeesState>,
        private modalService: MDBModalService
    ) { }

    ngOnInit() {
        this.isLoading$ = this.store.select(getAllLoaded)
        this.employees$ = this.store.pipe(
            select(getEmployees),
            map((list: Array<Employee>) => {
                if (!list) {
                    this.store.dispatch(new fromEmployees.EmployeesQuery())
                }
                return list
            })
        )
    }

    openAddEmployeeModal() {
        this.modalRef = this.modalService.show(EmployeeModalComponent, this.modalConfig)
        this.modalRef.content.heading = 'Add new Employee'
        this.modalRef.content.projectData.pipe(take(1)).subscribe((projectData: Employee) => {
            this.store.dispatch(new fromEmployees.EmployeeAdded({ employee: projectData }))
        })
    }

    openEditEmployeeModal(employee: Employee) {
        this.modalRef = this.modalService.show(EmployeeModalComponent, this.modalConfig)
        this.modalRef.content.heading = 'Edit Employee'
        this.modalRef.content.project = { ...employee }
        this.modalRef.content.projectData.pipe(take(1)).subscribe((employeeData: Employee) => {
            this.store.dispatch(new fromEmployees.EmployeeEdited({ employee: employeeData }))
        })
    }

    openConfirmModal(employee: Employee) {
        this.modalRef = this.modalService.show(ConfirmModalComponent, this.modalConfig)
        this.modalRef.content.confirmation.pipe(take(1)).subscribe((confirmation: boolean) => {
            if (confirmation) {
                this.store.dispatch(new fromEmployees.EmployeeDeleted({ employee }))
            }
        })
    }

    onEmployeeDelete(emplyee: Employee) {
        this.openConfirmModal(emplyee)
    }

    onEmployeeEdit(emplyee: Employee) {
        this.openEditEmployeeModal(emplyee)
    }

}
