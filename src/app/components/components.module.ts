
import { NgModule } from '@angular/core'
import { MDBBootstrapModule } from 'angular-bootstrap-md'

import { AppHeaderComponent } from './header/header.component'
import { AppFooterComponent } from './footer/footer.component'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [
        AppHeaderComponent,
        AppFooterComponent
    ],
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot(),
    ],
    exports: [
        CommonModule,
        AppHeaderComponent,
        AppFooterComponent
    ],
    providers: [],
    bootstrap: []
})
export class SharedComponentsModule { }
