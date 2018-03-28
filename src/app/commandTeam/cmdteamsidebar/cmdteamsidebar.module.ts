import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmdTeamSidebarComponent } from './cmdteamsidebar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ CmdTeamSidebarComponent ],
    exports: [ CmdTeamSidebarComponent ]
})

export class CmdTeamSidebarModule {}
