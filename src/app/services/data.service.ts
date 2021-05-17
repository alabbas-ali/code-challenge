import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class DataService {
    public readonly simulations: []

    constructor() {
        this.simulations = []
    }

    getById(id: string): any {
        return this.simulations.find((item) => item === id)
    }
}
