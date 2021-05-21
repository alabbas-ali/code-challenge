
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import {
    NavbarModule,
    DropdownModule,
    CardsModule,
    ButtonsModule,
    IconsModule
} from 'angular-bootstrap-md'

import { AppHeaderComponent } from './header/header.component'
import { AppFooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
    imports: [
        CommonModule,
        NavbarModule,
        IconsModule,
        RouterModule,
        DropdownModule.forRoot(),
        CardsModule,
        ButtonsModule,
    ],
    declarations: [
        AppHeaderComponent,
        AppFooterComponent,
        HomeComponent,
        AboutComponent,
        PageNotFoundComponent,
    ],
    exports: [
        CommonModule,
        AppHeaderComponent,
        AppFooterComponent,
        HomeComponent,
        AboutComponent,
        PageNotFoundComponent,
    ],
    providers: [],
    bootstrap: []
})
export class CoreModule { }
