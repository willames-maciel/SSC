import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { DefaultLoginComponent } from './layout/default-login/default-login.component';
import { AbsencesComponent } from './pages/absences/absences.component';
import { OccurrencesComponent } from './pages/occurrences/occurrences.component';
import { DelaysComponent } from './pages/delays/delays.component';
import { BankHoursComponent } from './pages/bank-hours/bank-hours.component';
import { DefaultComponent } from './layout/default/default.component';
import { MattersComponent } from './pages/matters/matters.component';
import { GeneralGoalComponent } from './pages/general-goal/general-goal.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { SubMattersComponent } from './pages/sub-matters/sub-matters.component';
import { UsersComponent } from './pages/users/users.component';
import { ComplimentsComponent } from './pages/compliments/compliments.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AttendantResultsComponent } from './pages/attendant-results/attendant-results.component';

export const routes: Routes = [
  { path: '', component: DefaultLoginComponent },

  {
    path: 'app', component: DefaultComponent,
    children: [

      { path: '', component: DashboardComponent, data: { titulo: 'Pagina Inicial' } },
      { path: 'absences', component: AbsencesComponent, data: { titulo: 'Ausencias' } },
      { path: 'attendant-results', component: AttendantResultsComponent, data: { titulo: 'Atendimentos' },},
      { path: 'complaints', component: ComplaintsComponent, data: { titulo: 'Reclamação' } },
      { path: 'compliments', component: ComplimentsComponent, data: { titulo: 'Elogios' } },
      { path: 'occurrences', component: OccurrencesComponent, data: { titulo: 'Ocorrencias' } },
      { path: 'delays', component: DelaysComponent, data: { titulo: 'Atrasos' } },
      { path: 'bank-hours', component: BankHoursComponent, data: { titulo: 'Banco de Horas' } },
      { path: 'general-goal', component: GeneralGoalComponent, data: { titulo: 'Configuração' } },
      { path: 'matters', component: MattersComponent, data: { titulo: 'Assuntos' } },
      { path: 'sub-matters', component: SubMattersComponent, data: { titulo: 'Subassuntos' } },
      { path: 'reports', component: ReportsComponent, data: { titulo: 'Relatórios e Estatisticas' } },
      { path: 'users', component: UsersComponent, data: { titulo: 'Usuarios' } },

    ]

  }


];
