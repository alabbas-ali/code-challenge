import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MDBModalRef } from 'angular-bootstrap-md'

import { EmployeeModalComponent } from './employee-modal.component'

describe('EmployeeModalComponent', () => {
    let component: EmployeeModalComponent
    let fixture: ComponentFixture<EmployeeModalComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeeModalComponent],
            providers: [MDBModalRef]
        })
            .compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
