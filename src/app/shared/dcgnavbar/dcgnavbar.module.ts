import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DcgNavbarComponent } from './dcgnavbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ DcgNavbarComponent ],
    exports: [ DcgNavbarComponent ]
})

export class DcgNavbarModule {}
