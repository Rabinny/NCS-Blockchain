import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmdTeamNavbarComponent } from './cmdteamnavbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ CmdTeamNavbarComponent ],
    exports: [ CmdTeamNavbarComponent ]
})

export class CmdTeamNavbarModule {}
