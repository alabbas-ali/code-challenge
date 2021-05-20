import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import {
    ButtonsModule,
    InputsModule,
    CardsModule,
    InputUtilitiesModule,
    IconsModule
} from 'angular-bootstrap-md'

import { FormsModule } from '@angular/forms'
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component'


@NgModule({
    declarations: [
        ConfirmModalComponent
    ],
    imports: [
        CommonModule,
        InputsModule,
        InputUtilitiesModule,
        IconsModule,
        FormsModule,
        ButtonsModule,
        CardsModule
    ],
    exports: [
        ConfirmModalComponent
    ],
    providers: [],
    entryComponents: []
})
export class SharedModule { }
