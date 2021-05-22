import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import { Employee } from 'src/app/employee/model/employee'

import { environment } from 'src/environments/environment'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

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

    defaultHeaders = new HttpHeaders()

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
                if (responce.status !== 'success') {
                    throw new Error('Error in retrieving Employees')
                }
                return responce.data
            }),
                catchError((err: any): Observable<Array<Employee>> => {
                    throw new Error(`Error in retrieving Employees ${err.message}`)
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
                if (responce.status !== 'success') {
                    throw new Error(`Error in retrieving Employee with id = ${id}`)
                }
                return responce.data
            }),
                catchError((err: any): Observable<Employee> => {
                    throw new Error(`Error in retrieving Employee with id = ${id} , ${err.message}`)
                }))
    }

    /**
     * Create or save Employee
     *
     * @param employee Employee
     * @param additionalParams object containing any additional query parameters
     * @param selectAccepts optional closure that receives all possible values for the accept header and should return the desired one
     * @param selectConsumes optional closure that receives all possible values for the content type header and should return the desired one
     */
    public save(
        employee: Employee,
        additionalParams?: { [name: string]: any },
        selectAccepts?: (accepts: Array<string>) => string,
        selectConsumes?: (consumes: Array<string>) => string,
    ): Observable<Employee> {

        let queryParameters = new HttpParams()

        if (additionalParams) {
            for (const param in additionalParams)
                queryParameters = queryParameters.append(param, additionalParams[param])
        }


        let headers = this.defaultHeaders

        // to determine the Accept header
        const accepts: Array<string> = [
            'application/json',
        ]

        if (accepts.length > 0) {
            const selectedAcceptsHeader: string = selectAccepts
                ? selectAccepts(accepts)
                : accepts[0]
            headers = headers.set('Accept', selectedAcceptsHeader)
        }

        // to determine the Content-Type header
        const consumes: Array<string> = [
            'application/x-www-form-urlencoded; charset=UTF-8',
        ]

        if (consumes.length > 0) {
            const selectedConsumesHeader: string = selectConsumes
                ? selectConsumes(consumes)
                : consumes[0]
            headers = headers.set('Content-Type', selectedConsumesHeader)
        }

        if (employee.id) {
            return this.httpClient
                .put<SaveApiResponce>(`${this.api}/update/${encodeURIComponent(String(employee.id))}`, employee, {
                    params: queryParameters,
                    headers: headers,
                })
                .pipe(map((responce: SaveApiResponce): Employee => {
                    if (responce.status !== 'success') {
                        throw new Error('Error in saving the Employee')
                    }
                    return JSON.parse(Object.keys(responce.data)[0]) || responce.data
                }))
        } else {
            return this.httpClient
                .post<SaveApiResponce>(`${this.api}/create`, employee, {
                    params: queryParameters,
                    headers: headers,
                })
                .pipe(map((responce: SaveApiResponce): Employee => {
                    if (responce.status !== 'success') {
                        throw new Error('Error in saving the Employee')
                    }
                    return JSON.parse(Object.keys(responce.data)[0]) || responce.data
                }))
        }
    }

    /**
     * Delete Employee
     */
    public delete(employee: Employee): Observable<boolean> {
        return this.httpClient
            .delete<DeleteApiResponce>(`${this.api}/delete/${encodeURIComponent(String(employee.id))}`)
            .pipe(map((responce: DeleteApiResponce) => {
                if (responce.status !== 'success') {
                    throw new Error('Error in deleting the Employee')
                }
                return true
            }))
    }

}
