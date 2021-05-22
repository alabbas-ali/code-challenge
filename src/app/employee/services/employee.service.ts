import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Employee } from 'src/app/employee/model/employee'

import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

interface GetAllApiResponce {
    status: string; // "success",
    data: Array<Employee>;
}

interface SaveApiResponce {
    status: string; // "success",
    data: Employee;
}

interface DeleteApiResponce {
    status: string; // "success",
    data: string;
}

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {

    private api = environment.API_HOST

    constructor(
        protected httpClient: HttpClient,
    ) { }

    /**
     * Get Employees
     * Get a list of Employees
     */
    public getAll(): Observable<Array<Employee>> {
        return this.httpClient
            .get<GetAllApiResponce>(`${this.api}/employees`)
            .pipe(map((responce: GetAllApiResponce): Array<Employee> => {
                if (responce.status !== 'success') { throw new Error('Error in retriving Employees') }
                return responce.data
            }))
    }

    /**
     * Get Employee
     * Get a specific Employee by id.
     *
     * @param id id of the emplyee requested
     */
    public get(id: string): Observable<Employee> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getBlocking.')
        }
        return this.httpClient
            .get<SaveApiResponce>(`${this.api}/employee/${encodeURIComponent(String(id))}`)
            .pipe(map((responce: SaveApiResponce): Employee => {
                if (responce.status !== 'success') { throw new Error(`Error in retriving Employee with id = ${id}`) }
                return responce.data
            }))
    }

    /**
     * Create or save Employee
     *
     * @param employee Employee
     */
    public save(employee: Employee): Observable<Employee> {
        if (employee.id) {
            return this.httpClient
                .put<SaveApiResponce>(`${this.api}/update/${encodeURIComponent(String(employee.id))}`, employee)
                .pipe(map((responce: SaveApiResponce): Employee => {
                    if (responce.status !== 'success') { throw new Error('Error in saving the Employee') }
                    return responce.data
                }))
        } else {
            return this.httpClient
                .post<SaveApiResponce>(`${this.api}/create`, employee)
                .pipe(map((responce: SaveApiResponce): Employee => {
                    if (responce.status !== 'success') { throw new Error('Error in saving the Employee') }
                    return responce.data
                }))
        }
    }

    /**
     * Delete Employee
     */
    public delete(employee: Employee): Observable<boolean> {
        return this.httpClient
            .delete<DeleteApiResponce>(`${this.api}/delete/${encodeURIComponent(String(employee.id))}`)
            .pipe(map((responce: DeleteApiResponce): boolean => {
                if (responce.status !== 'success') { return false }
                return true
            }))
    }

}
