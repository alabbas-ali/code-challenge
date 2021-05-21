import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core'
import { Employee } from '../../model/employee'

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {
    @Input() employee: Employee
    @Output() deleted = new EventEmitter<Employee>()
    @Output() edited = new EventEmitter<Employee>()

    constructor() { }

    ngOnInit() {
    }

    onDelete() {
        this.deleted.emit(this.employee)
    }

    onEdit() {
        this.edited.emit(this.employee)
    }

    showDetail(employee: Employee) {

    }

}
