import { createSelector, createFeatureSelector } from '@ngrx/store'
import { Employee } from '../model/employee'
import { EmployeesState } from './employees.state'

export const getEmployeesState = createFeatureSelector<EmployeesState>('employee')

export const getEmployees = createSelector(
    getEmployeesState,
    (employees: EmployeesState): Array<Employee> => employees.list
)

export const getAllLoaded = createSelector(
    getEmployeesState,
    (employees: EmployeesState): boolean => employees.loading
)

export const getError = createSelector(
    getEmployeesState,
    (employees: EmployeesState): boolean => employees.error
)
