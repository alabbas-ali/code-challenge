import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Store } from '@ngrx/store'
import { of } from 'rxjs'

import { EmployeesState } from '../store/employees.state'
import { EmployeesComponent } from './emplyees.component'

/**
 * ToDo To Make this test runs we need to create a mode helper to test the store
 * https://medium.com/@bo.vandersteene/mock-your-ngrx-store-on-the-easy-way-68c66d4bea63
 */
class StoreMock {
    // How we did it before
    select = jasmine.createSpy().and.returnValue(of({}))
    dispatch = jasmine.createSpy()
}

describe('EmployeesComponent', () => {
    let component: EmployeesComponent
    let fixture: ComponentFixture<EmployeesComponent>
    let store: Store<EmployeesState>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeesComponent],
            providers: [{ provide: Store, useClass: StoreMock },
                
            ]
        })
            .compileComponents()
    }))

    beforeEach(() => {
        store = TestBed.get(Store)
        fixture = TestBed.createComponent(EmployeesComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
