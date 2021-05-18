import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HomeComponent } from '@@pages/home/home.component'
import { AboutComponent } from '@@pages/about/about.component'
import { SharedComponentsModule } from '@@components/components.module'
import { AppComponent } from './app.component'
import { reducers } from '@@store/index'
import { environment } from '../environments/environment'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot(reducers , {
            // BIG TO DO after the Angular v9 upgrade : This is a temporary workaround but not a solution 
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
            },
        }),
        // StoreModule.forFeature('core', reducers),
        StoreDevtoolsModule.instrument({
            name: 'Code Challenge App',
            maxAge: 50,
            logOnly: environment.production,
        }),
        SharedComponentsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
