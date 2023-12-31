
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import {HomeComponent} from "./Routes/home/home.component"
import { AboutComponent } from './Routes/about/about.component';
import { GameIdComponent } from './Routes/game-id/game-id.component';
// Define your routes
const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // Add more routes here if needed
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:"home", component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path:'gameObjects/:id', component:GameIdComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
