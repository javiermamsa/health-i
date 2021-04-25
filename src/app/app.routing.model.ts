import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { EsteticaComponent } from './estetica/estetica.component';
import { HomeComponent } from './home/home.component';
import { MassageComponent } from './massage/massage.component';
import { ParrucchieriComponent } from './parrucchieri/parrucchieri.component';
import { SpaComponent } from './spa/spa.component';
import { WorkoutComponent } from './workout/workout.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'parrucchieri', component: ParrucchieriComponent},
    { path: 'workout', component: WorkoutComponent },
    { path: 'estetica', component: EsteticaComponent },
    { path: 'spa', component: SpaComponent },
    { path: 'account', component: AccountComponent },
    { path: 'massaggio', component: MassageComponent },
    {path: '**', redirectTo: '/'}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}