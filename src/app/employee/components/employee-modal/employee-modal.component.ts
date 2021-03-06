import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { MDBModalRef } from 'angular-bootstrap-md'
import { Subject } from 'rxjs'

import { Employee } from '../../model/employee'

@Component({
    selector: 'employee-modal',
    templateUrl: './employee-modal.component.html',
    styleUrls: ['./employee-modal.component.scss']
})
export class EmployeeModalComponent {
    @ViewChild('employeeForm', { static: true }) employeeForm: NgForm

    heading: string
    employeeData: Subject<Employee> = new Subject()
    employee: Employee = {} as Employee

    constructor(
        public modalRef: MDBModalRef
    ) { }

    onSave() {
        if (this.employeeForm.valid) {
            this.employeeData.next(this.employee)
            this.modalRef.hide()
        } else {
            const controls = this.employeeForm.controls
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched())
        }
    }

}
