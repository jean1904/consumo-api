import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NoticiasComponent} from './components/noticias/noticias.component';

const routes: Routes = [
    {
        path: '',
        component: NoticiasComponent
    },
    {
        path: '**',
        redirectTo: ''
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
