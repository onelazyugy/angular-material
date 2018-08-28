import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    declarations: [

    ],
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule,
        MatTableModule,
        MatCheckboxModule,
        MatRadioModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatStepperModule,
        MatTabsModule,
        MatDialogModule
    ]
})
export class MaterialModule {

}
