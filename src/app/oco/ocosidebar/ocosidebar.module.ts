import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OcoSidebarComponent } from './ocosidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ OcoSidebarComponent ],
    exports: [ OcoSidebarComponent ]
})

export class OcoSidebarModule {}
