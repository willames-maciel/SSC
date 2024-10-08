import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { DefaultLoginComponent } from './layout/default-login/default-login.component';
import { DefaultApplicationComponent } from './layout/default-application/default-application.component';
import { AbsencesComponent } from './pages/absences/absences.component';
import { OccurrencesComponent } from './pages/occurrences/occurrences.component';
import { DelaysComponent } from './pages/delays/delays.component';
import {BankHoursComponent} from './pages/bank-hours/bank-hours.component';

export const routes: Routes = [
  { path: '', component: DefaultLoginComponent },

  {
    path: 'app', component: DefaultApplicationComponent,
    children: [

      { path: '', component: DashboardComponent },
      { path: 'Ausencias', component: AbsencesComponent },
      { path: 'Ocorrencias', component: OccurrencesComponent },
      { path: 'Atrasos', component: DelaysComponent },
      { path: 'Banco-de-Horas',  component: BankHoursComponent },


    ]

  }


];
