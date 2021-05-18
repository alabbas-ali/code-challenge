import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { SharedComponentsModule } from '@@components/components.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { appStoreReducer } from './store'

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(appStoreReducer , {
            // BIG TO DO after the Angular v9 upgrade : This is a temporary workaround but not a solution 
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
            },
        }),
        SharedComponentsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
