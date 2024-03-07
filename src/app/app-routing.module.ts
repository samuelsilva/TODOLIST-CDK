import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListDragDropComponent } from "./components/list-drag-drop/list-drag-drop.component";


const routes: Routes = [
    { path: 'home', component: ListDragDropComponent },
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}