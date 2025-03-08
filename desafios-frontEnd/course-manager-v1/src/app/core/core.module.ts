import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './component/errors/error-not-found/error-not-found.component';
import { NavBarComponent } from './component/nav-bar/navBar.component';

@NgModule({
    declarations: [
        NavBarComponent,
        ErrorNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot([ 
            {
              path: '**' , component: ErrorNotFoundComponent
            }
          ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule { 

}