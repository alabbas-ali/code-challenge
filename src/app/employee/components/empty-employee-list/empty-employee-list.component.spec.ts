import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EmptyEmployeeListComponent } from './empty-employee-list.component'

describe('EmptyEmployeeListComponent', () => {
    let component: EmptyEmployeeListComponent
    let fixture: ComponentFixture<EmptyEmployeeListComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmptyEmployeeListComponent]
        })
            .compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyEmployeeListComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
