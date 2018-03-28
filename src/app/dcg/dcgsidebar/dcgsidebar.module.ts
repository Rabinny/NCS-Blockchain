import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {DcgSidebarComponent } from './dcgsidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ DcgSidebarComponent ],
    exports: [ DcgSidebarComponent ]
})

export class DcgSidebarModule {}
