import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CacSidebarComponent } from './cacsidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ CacSidebarComponent ],
    exports: [ CacSidebarComponent ]
})

export class CacSidebarModule {}
