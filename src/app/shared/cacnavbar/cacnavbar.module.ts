import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CacNavbarComponent } from './cacnavbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ CacNavbarComponent ],
    exports: [ CacNavbarComponent ]
})

export class CacNavbarModule {}
