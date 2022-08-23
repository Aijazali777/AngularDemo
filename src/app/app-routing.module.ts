import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent  } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
