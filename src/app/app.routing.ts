import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CardsComponent } from './components/cards/cards.component';
import { ContactoComponent } from './components/contacto/contacto.component';

/* import { HomeComponent } from './';
import { Name2Component } from './';
import { Name3Component } from './';
import { Name4Component } from './';
import { PageNotFoundComponent } from './';
 */
const routes: Routes = [
    { path: '', redirectTo:'cards',pathMatch: 'full' },
    { path: 'cards', component: CardsComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', redirectTo:'cards',pathMatch: 'full'},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
