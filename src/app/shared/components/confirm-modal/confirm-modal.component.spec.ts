import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MDBModalRef } from 'angular-bootstrap-md'

import { ConfirmModalComponent } from './confirm-modal.component'

describe('ConfirmModalComponent', () => {
    let component: ConfirmModalComponent
    let fixture: ComponentFixture<ConfirmModalComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmModalComponent],
            providers: [MDBModalRef]
        })
            .compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
