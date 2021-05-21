import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import {
    ButtonsModule,
    CardsModule,
    IconsModule,
    InputsModule,
    InputUtilitiesModule,
    ModalModule,
    WavesModule,
} from 'angular-bootstrap-md'

import { SharedModule } from '@@shared/shared.module'
import { EmployeesEffects } from './store/employees.effects'
import * as fromEmployees from './store/employees.reducer'
import { EmployeeComponent } from './components/employee/employee.component'
import { EmployeesComponent } from './containers/emplyees.component'
import { EmployeeModalComponent } from './components/employee-modal/employee-modal.component'

@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        SharedModule,
        HttpClientModule,
        FormsModule,
        ButtonsModule,
        InputsModule,
        InputUtilitiesModule,
        WavesModule,
        IconsModule,
        CardsModule,
        StoreModule.forFeature('employee', fromEmployees.employeesReducer),
        EffectsModule.forFeature([EmployeesEffects])
    ],
    declarations: [
        EmployeeComponent,
        EmployeeModalComponent,
        EmployeesComponent
    ],
    exports: [EmployeesComponent],
})
export class EmployeeModule { }
