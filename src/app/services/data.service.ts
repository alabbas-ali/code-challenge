import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import { Employee } from '@@model/employee'

import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

interface ApiResponce {
    status: string //"success",
    data: any
}

@Injectable({
    providedIn: 'root',
})
export class DataService {

    private api = environment.API_HOST

    private defaultHeaders = new HttpHeaders()
    
    constructor(
        protected httpClient: HttpClient,
    ) { }

    /**
     * Get Employees
     * Get a list of Employees
     * @param additionalParams object containing any additional query parameters
     * @param reportProgress flag to report request and response progress.
     * @param selectAccepts optional closure that receives all possible values for the accept header and should return the desired one
     * @param selectConsumes optional closure that receives all possible values for the content type header and should return the desired one
     */
    getALL(
        additionalParams?: { [name: string]: any },
        reportProgress = false,
        selectAccepts?: (accepts: Array<string>) => string,
        selectConsumes?: (consumes: Array<string>) => string,
    ): Observable<Array<Employee>> {

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
            'application/json',
        ]

        if (consumes.length > 0) {
            const selectedConsumesHeader: string = selectConsumes
                ? selectConsumes(consumes)
                : consumes[0]
            headers = headers.set('Content-Type', selectedConsumesHeader)
        }

        return this.httpClient.get<ApiResponce>(`${this.api}/employees`,
            {
                params: queryParameters,
                headers: headers,
                reportProgress: reportProgress,
            },
        ).pipe(map((responce: ApiResponce): Array<Employee> => {
            console.log(responce)
            if(responce.status !== 'success') throw new Error(`Error in retriving Employees`)
            return responce.data 
        }))
        
    }

    /**
     * Get Employee
     * Get a specific Employee by id.
     * @param id id of the emplyee requested
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param additionalParams object containing any additional query parameters
     * @param reportProgress flag to report request and response progress.
     * @param selectAccepts optional closure that receives all possible values for the accept header and should return the desired one
     * @param selectConsumes optional closure that receives all possible values for the content type header and should return the desired one
     */
    getEmployee(
        id: string,
        additionalParams?: { [name: string]: any },
        reportProgress = false,
        selectAccepts?: (accepts: Array<string>) => string,
        selectConsumes?: (consumes: Array<string>) => string,
    ): Observable<Employee> {
        if (id === null || id === undefined) {
            throw new Error(`Required parameter id was null or undefined when calling getBlocking.`)
        }

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
            'application/json',
        ]

        if (consumes.length > 0) {
            const selectedConsumesHeader: string = selectConsumes
                ? selectConsumes(consumes)
                : consumes[0]
            headers = headers.set('Content-Type', selectedConsumesHeader)
        }

        return this.httpClient.get<ApiResponce>(`${this.api}/employee/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                headers: headers,
                reportProgress: reportProgress,
            },
        ).pipe(map((responce: ApiResponce): Employee => {
            console.log(responce)
            if(responce.status !== 'success') throw new Error(`Error in retriving Employee with id = ${id}`)
            return responce.data 
        }))
    }

}
