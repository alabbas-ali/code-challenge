import { TestBed, getTestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { EmployeeService } from './employee.service'
import { Employee } from '../model/employee'

describe('EmployeeService', () => {
    let injector: TestBed
    let service: EmployeeService
    let httpMock: HttpTestingController

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [EmployeeService]
        })
        injector = getTestBed()

        service = TestBed.inject(EmployeeService)
        httpMock = injector.get(HttpTestingController)
    })

    afterEach(() => {
        httpMock.verify()
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    describe('#getAll', () => {
        it('should return an Observable<Array<Employees>>', () => {
            const dummyEmployees: Array<Employee> = [
                {
                    id: '',
                    employee_name: '..',
                    employee_salary: 0.0,
                    employee_age: 0,
                    profile_image: '/assets/loading_profile.gif'
                },
                {
                    id: '',
                    employee_name: '..',
                    employee_salary: 0.0,
                    employee_age: 0,
                    profile_image: '/assets/loading_profile.gif'
                },
                {
                    id: '',
                    employee_name: '..',
                    employee_salary: 0.0,
                    employee_age: 0,
                    profile_image: '/assets/loading_profile.gif'
                }
            ]

            service.getAll().subscribe(employees => {
                expect(employees.length).toBe(3)
                expect(employees).toEqual(dummyEmployees)
            })

            const req = httpMock.expectOne(`/api/v1/employees`)
            expect(req.request.method).toBe("GET")
            req.flush(dummyEmployees)
        })
    })
})
