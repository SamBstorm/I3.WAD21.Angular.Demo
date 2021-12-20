import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

const routes: Routes = [
  {path:"demo_01", component : HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
