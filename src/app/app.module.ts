import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { ModalModule } from 'angular-bootstrap-md'

import { CoreModule } from '@@core/core.module'
import { AboutComponent } from '@@core/about/about.component'
import { PageNotFoundComponent } from '@@core/page-not-found/page-not-found.component'
import { SharedModule } from '@@shared/shared.module'

import { AppComponent } from './app.component'
import { environment } from '../environments/environment'
import { EmployeesComponent } from './employee/containers/emplyees.component'
import { EmployeeModule } from './employee/employee.module'
import { reducers } from './reducers'

const routes: Routes = [
    { path: '', component: EmployeesComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true
            },
        }),
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        !environment.production ? StoreDevtoolsModule.instrument({
            name: 'Code Challenge App',
            maxAge: 50,
            logOnly: environment.production,
        }) : [] ,
        EffectsModule.forRoot([]),
        CoreModule,
        SharedModule,
        EmployeeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
