import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OcoNavbarComponent } from './oconavbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ OcoNavbarComponent ],
    exports: [ OcoNavbarComponent ]
})

export class OcoNavbarModule {}
