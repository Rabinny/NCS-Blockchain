import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './adminnavbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ AdminNavbarComponent ],
    exports: [ AdminNavbarComponent ]
})

export class AdminNavbarModule {}
