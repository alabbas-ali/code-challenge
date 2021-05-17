
import { NgModule } from '@angular/core'
import { MDBBootstrapModule } from 'angular-bootstrap-md'

import { AppHeaderComponent } from './header/header.component'
import { AppFooterComponent } from './footer/footer.component'
import { AppRoutingModule } from '../app-routing.module'

@NgModule({
    declarations: [
        AppHeaderComponent,
        AppFooterComponent
    ],
    imports: [
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
    ],
    exports: [
        AppHeaderComponent,
        AppFooterComponent
    ],
    providers: [],
    bootstrap: []
})
export class SharedComponentsModule { }
