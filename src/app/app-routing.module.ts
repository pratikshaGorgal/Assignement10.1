import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BoksComponent } from './boks/boks.component';

const routes: Routes = [
{path:'Technologies',component:TechnologiesComponent},
{path:'Boks',component:BoksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
