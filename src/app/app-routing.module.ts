import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AppMainComponent } from './app.main.component';
import { TableComponent } from './components/conta-contabil/conta-contabil.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: HomeComponent},
                    {path: 'dashboard', component: DashboardComponent},
                    {path: 'uikit/table', component: TableComponent},
                ],
            },
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
