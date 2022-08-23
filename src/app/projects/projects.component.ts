import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../project-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects

  constructor(projects:ProjectDataService) { 
    this.projects = projects.getProjects()
  }

  ngOnInit(): void {
  }

}
