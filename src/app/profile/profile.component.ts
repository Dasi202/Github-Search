import { ProfileService } from '../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string = 'Dasi202';
  user: any;
  userRepositories: any;
  constructor(private profileService: ProfileService) { }
  searchUser() {
    this.profileService.updateUser(this.userName);

    this.profileService.searchProfile().subscribe((user: any) => {
      this.user = user;
    });

    this.profileService.getRepositories().subscribe((repositories: any) => {
      this.userRepositories = repositories;
    });
  }
  ngOnInit(): void {
    this.searchUser();
  }

}
