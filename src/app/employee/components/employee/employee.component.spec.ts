import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { ButtonsModule, CardsModule, IconsModule, InputsModule, InputUtilitiesModule, WavesModule } from 'angular-bootstrap-md'

import { EmployeeComponent } from './employee.component'

describe('EmployeeComponent', () => {
    let component: EmployeeComponent
    let fixture: ComponentFixture<EmployeeComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ButtonsModule,
                InputsModule,
                InputUtilitiesModule,
                WavesModule,
                IconsModule,
                CardsModule,
            ],
            declarations: [EmployeeComponent]
        })
            .compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(EmployeeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
