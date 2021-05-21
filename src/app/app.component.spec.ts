import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents()

    }))

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app).toBeTruthy()
    })

    it('should have as title \'code-challenge\'', () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app.title).toEqual('code-challenge')
    })

    // it('should render title', () => {
    //     const fixture = TestBed.createComponent(AppComponent)
    //     fixture.detectChanges()
    //     const compiled = fixture.nativeElement
    //     console.log(compiled)
    //     expect(compiled.querySelector('.navbar-brand').textContent).toContain('Code Challenge')
    // })
})
