import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { EntryComponent }   from './entry/entry.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent} from './signup/signup.component';
import { RegistersComponent } from './registers/registers.component';
import { LicenceComponent } from './licence/licence.component';
import { TraderFormComponent } from './traderForm/traderForm.component';

import { CacDashboardComponent } from './cacdashboard/cacdashboard.component';
import { CacNotificationsComponent } from './cacnotifications/cacnotifications.component';
import { CacUserComponent } from './cacuser/cacuser.component';
import { CacAssignComponent } from './cacassign/cacassign.component';
import { CacApprovalsComponent } from './cacapprovals/cacapprovals.component';

// dcg
import { DcgSidebarComponent } from './dcg/dcgsidebar/dcgsidebar.component';
import { DcgDashboardComponent } from './dcg/dcgdashboard/dcgdashboard.component';
import  { DcgNotificationsComponent } from './dcg/dcgnotifications/dcgnotifications.component';
import  { DcgUserComponent } from './dcg/dcguser/dcguser.component';
import { DcgAssignComponent } from './dcg/dcgassign/dcgassign.component';
import { DcgApprovalsComponent } from './dcg/dcgapprovals/dcgapprovals.component';
import { CacRegistersComponent } from './cacregisters/cacregisters.component';

import { OcoDashboardComponent } from './oco/ocodashboard/ocodashboard.component';
import { OcoUserComponent } from './oco/ocouser/ocouser.component';
import { OcoRegistersComponent } from './oco/ocoregisters/ocoregisters.component';
import { OcoNotificationsComponent } from './oco/oconotifications/oconotifications.component';
import { OcoReportsComponent } from './oco/ocoreports/ocoreports.component';

// admin
import { AdminDashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminNotificationsComponent } from './admin/adminnotifications/adminnotifications.component';
import { AssignmentComponent } from './admin/assignment/assignment.component';
import { DocumentRegisterComponent } from './admin/documentRegister/documentRegister.component';
import { RoleAccessComponent } from 'app/admin/roleAccess/roleAccess.component';
import { UsersComponent } from 'app/admin/users/users.component';
import { ZoneComponent } from 'app/admin/zone/zone.component';
import { RolesComponent } from './admin/roles/roles.component';

// command team
import { CmdTeamEntryComponent } from 'app/commandTeam/cmdteamentry/cmdteamentry.component';
import { CmdTeamDashboardComponent } from 'app/commandTeam/cmdteamdashboard/cmdteamdashboard.component';
import { CmdTeamUserComponent } from 'app/commandTeam/cmdteamuser/cmdteamuser.component';
import { CmdTeamLicenceComponent } from 'app/commandTeam/cmdteamlicence/cmdteamlicence.component';
import { CmdTeamReportsComponent } from 'app/commandTeam/cmdteamreports/cmdteamreports.component';
import { CmdTeamNotificationsComponent } from 'app/commandTeam/cmdteamnotifications/cmdteamnotifications.component';
import { CmdTeamRegistersComponent } from 'app/commandTeam/cmdteamregisters/cmdteamregisters.component';
import { CmdTeamTradersComponent } from 'app/commandTeam/cmdteamtraders/cmdteamtraders.component';
import { CmdTeamFormComponent } from 'app/commandTeam/cmdteamform/cmdteamform.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'entry',
        component: EntryComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'guarantees',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'registers',
        component: RegistersComponent
    },


    {
        path: 'uca',
        component: TableComponent
    },

    {
        path: 'licence',
        component: LicenceComponent
    },

    // cac routes
    {
        path: 'cacdashboard',
        component: CacDashboardComponent
    },
    {
        path: 'cacnotifications',
        component: CacNotificationsComponent
    },
    {
        path: 'cacuser',
        component: CacUserComponent
    },
    {
        path: 'cacassign',
        component: CacAssignComponent
    },
    {
        path: 'cacapprovals',
        component: CacApprovalsComponent
    },
    {
        path: 'cacregisters',
        component: CacRegistersComponent
    },
    {
        path: 'traderform',
        component: TraderFormComponent
    },

    // dcg routes
    {
        path: 'dcgdashboard',
        component: DcgDashboardComponent
    },
    {
        path: 'dcgnotifications',
        component: DcgNotificationsComponent
    },
    {
        path: 'dcguser',
        component: DcgUserComponent
    },
    {
        path: 'dcgassign',
        component: DcgAssignComponent
    },
    {
        path: 'dcgapprovals',
        component: DcgApprovalsComponent
    },

    // oco routes
    {
        path: 'ocodashboard',
        component: OcoDashboardComponent 
    },
    {
        path: 'ocouser',
        component: OcoUserComponent 
    },
    {
        path: 'oconotifications',
        component: OcoNotificationsComponent 
    },
    {
        path: 'ocoregisters',
        component: OcoRegistersComponent 
    },
    {
        path: 'ocoreport',
        component: OcoReportsComponent 
    },

    // admin routes
    {
        path: 'admin',
        component: AdminDashboardComponent
    },
    {
        path: 'adminnotification',
        component: AdminNotificationsComponent
    },
    {
        path: 'adminassignment',
        component: AssignmentComponent,
    },
    {
        path: 'admindocumentregister',
        component: DocumentRegisterComponent
    },
    {
        path: 'adminroleaccess',
        component: RoleAccessComponent
    },
    {
        path: 'adminroles',
        component: RolesComponent
    },
    {
        path: 'adminzones',
        component: ZoneComponent
    },
    {
        path: 'adminusers',
        component: UserComponent
    },


    // Command Team Routes
    {
        path: 'cmdteamdashboard',
        component: CmdTeamDashboardComponent
    },
    {
        path: 'cmdteamentry',
        component: CmdTeamEntryComponent
    },
    {
        path: 'cmdteamlicence',
        component: CmdTeamLicenceComponent
    },
    {
        path: 'cmdteamuser',
        component: CmdTeamUserComponent
    }, 
    {
        path: 'cmdteamregisters',
        component: CmdTeamRegistersComponent
    },
    {
        path: 'cmdteamreport',
        component: CmdTeamReportsComponent
    },
    {
        path: 'cmdteamnotifications',
        component: CmdTeamNotificationsComponent
    },
    {
        path: 'cmdteamtraders',
        component: CmdTeamTradersComponent
    },
    {
        path: 'cmdteamform41',
        component: CmdTeamFormComponent
    }


]
