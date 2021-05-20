import { employeesReducer } from './employees.reducer'
import { EmployeesInitialState } from './employees.state'

describe('Employees Reducer', () => {
    describe('an unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as any

            const result = employeesReducer(EmployeesInitialState, action)

            expect(result).toBe(EmployeesInitialState)
        })
    })
})
