import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';



import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import {CacNavbarModule} from './shared/cacnavbar/cacnavbar.module';
import {DcgNavbarModule} from './shared/dcgnavbar/dcgnavbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';


import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { TraderFormComponent } from './traderForm/traderForm.component';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenubarComponent } from './menubar/menubar.component';
import { EntryComponent } from './entry/entry.component';
import { RegistersComponent } from './registers/registers.component';
import { LicenceComponent } from './licence/licence.component';

// Others
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

//cac
import { CacSidebarModule } from 'app/cacsidebar/cacsidebar.module';
import { CacDashboardComponent } from './cacdashboard/cacdashboard.component';
import  { CacNotificationsComponent } from './cacnotifications/cacnotifications.component';
import  { CacUserComponent } from './cacuser/cacuser.component';
import { CacAssignComponent } from './cacassign/cacassign.component';
import { CacApprovalsComponent } from 'app/cacapprovals/cacapprovals.component';
import { CacRegistersComponent } from './cacregisters/cacregisters.component';


// Dcg
import { DcgSidebarModule } from './dcg/dcgsidebar/dcgsidebar.module';
import { DcgDashboardComponent } from './dcg/dcgdashboard/dcgdashboard.component';
import  { DcgNotificationsComponent } from './dcg/dcgnotifications/dcgnotifications.component';
import  { DcgUserComponent } from './dcg/dcguser/dcguser.component';
import { DcgAssignComponent } from './dcg/dcgassign/dcgassign.component';
import { DcgApprovalsComponent } from './dcg/dcgapprovals/dcgapprovals.component';

// Oco
import { OcoDashboardComponent } from './oco/ocodashboard/ocodashboard.component';
import { OcoUserComponent } from './oco/ocouser/ocouser.component';
import { OcoRegistersComponent } from './oco/ocoregisters/ocoregisters.component';
import { OcoNotificationsComponent } from './oco/oconotifications/oconotifications.component';
import { OcoSidebarModule} from './oco/ocosidebar/ocosidebar.module';
import { OcoNavbarModule } from './shared/oconavbar/oconavbar.module';
import { OcoReportsComponent } from 'app/oco/ocoreports/ocoreports.component';


// admin
import { AdminDashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminSidebarModule } from './admin/adminsidebar/adminsidebar.module';
import { AdminNotificationsComponent } from './admin/adminnotifications/adminnotifications.component';
import { AssignmentComponent } from './admin/assignment/assignment.component';
import { DocumentRegisterComponent } from './admin/documentRegister/documentRegister.component';
import { RoleAccessComponent } from 'app/admin/roleAccess/roleAccess.component';
import { UsersComponent } from 'app/admin/users/users.component';
import { ZoneComponent } from 'app/admin/zone/zone.component';
import { RolesComponent } from './admin/roles/roles.component';
import { AdminNavbarModule } from './shared/adminnavbar/adminnavbar.module'

// services
import { SignupService } from './services/signup.service';
import { DashboardService } from './services/dashboard.service';
import { EntryService } from 'app/services/entry.service';
import { AdminDashboardService } from 'app/services/admindashboard.service';

// command team
import { CmdTeamEntryComponent } from 'app/commandTeam/cmdteamentry/cmdteamentry.component';
import { CmdTeamDashboardComponent } from 'app/commandTeam/cmdteamdashboard/cmdteamdashboard.component';
import { CmdTeamUserComponent } from 'app/commandTeam/cmdteamuser/cmdteamuser.component';
import { CmdTeamLicenceComponent } from 'app/commandTeam/cmdteamlicence/cmdteamlicence.component';
import { CmdTeamReportsComponent } from 'app/commandTeam/cmdteamreports/cmdteamreports.component';
import { CmdTeamNotificationsComponent } from 'app/commandTeam/cmdteamnotifications/cmdteamnotifications.component';
import { CmdTeamRegistersComponent } from 'app/commandTeam/cmdteamregisters/cmdteamregisters.component';
import { CmdTeamSidebarModule } from 'app/commandTeam/cmdteamsidebar/cmdteamsidebar.module';
import { CmdTeamNavbarModule } from 'app/shared/cmdteamnavbar/cmdteamnavbar.module';
import { CmdTeamTradersComponent } from 'app/commandTeam/cmdteamtraders/cmdteamtraders.component';
import  { CmdTeamFormComponent } from 'app/commandTeam/cmdteamform/cmdteamform.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    SigninComponent,
    SignupComponent,
    WelcomeComponent,
    MenubarComponent,
    EntryComponent,
    RegistersComponent,
      LicenceComponent,
    TraderFormComponent,

    // cac
    CacDashboardComponent,
    CacNotificationsComponent,
    CacUserComponent,
    CacAssignComponent,
    CacApprovalsComponent,
    CacRegistersComponent,

    // dcg
    DcgDashboardComponent,
    DcgNotificationsComponent,
    DcgUserComponent,
    DcgAssignComponent,
    DcgApprovalsComponent,

    // Oco
    OcoDashboardComponent,
    OcoUserComponent,
    OcoRegistersComponent,
    OcoNotificationsComponent,
    OcoReportsComponent,

    // Admin
    RolesComponent,
    RoleAccessComponent,
    UsersComponent,
    ZoneComponent,
    DocumentRegisterComponent,
    AssignmentComponent,
    AdminDashboardComponent,
    AdminNotificationsComponent,

    // Command Team
    CmdTeamDashboardComponent,
    CmdTeamEntryComponent,
    CmdTeamLicenceComponent,
    CmdTeamUserComponent,
    CmdTeamRegistersComponent,
    CmdTeamReportsComponent,
    CmdTeamNotificationsComponent,
    CmdTeamTradersComponent,
    CmdTeamFormComponent
   
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ToastModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    CacSidebarModule,
    OcoSidebarModule,
    DcgSidebarModule,
    AdminSidebarModule,
    CmdTeamSidebarModule,
    NavbarModule,
    OcoNavbarModule,
    CacNavbarModule,
    DcgNavbarModule,
    AdminNavbarModule,
    CmdTeamNavbarModule,
    FooterModule,
    FormsModule, 
    ReactiveFormsModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [SignupService, DashboardService, EntryService, AdminDashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
