import { ProfileService } from '../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repositories: any[]=[]
  repositoryName:string='Dans-Pizza';

  constructor(private profileService: ProfileService) { }

  findRepository() {
    this.profileService.updateRepository(this.repositoryName);
    this.profileService.searchRepositories().subscribe((repository: any) => {
      this.repositories = repository.items;
      console.log(this.repositories);
    })
  }

  ngOnInit(): void {
    this.findRepository();
  }

}
