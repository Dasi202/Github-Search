
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private userName: string = '';
  private repositoryName: string = '';
  private url: string = '';
  private getRepositoriesUrl: string = '';
  private searchRepositoriesUrl: string = '';
  constructor(private http: HttpClient) {
    console.log('service ready');
  }

  searchProfile() {
    this.url = 'https://api.github.com/users/' + this.userName;
    return this.http.get(this.url);
  }

  getRepositories() {
    this.getRepositoriesUrl =
      'https://api.github.com/users/' + this.userName + '/repos';
    return this.http.get(this.getRepositoriesUrl);
  }

  searchRepositories() {
    this.searchRepositoriesUrl =
      'https://api.github.com/search/repositories?q=' + this.repositoryName;
    return this.http.get(this.searchRepositoriesUrl);
  }

  updateUser(userName: string) {
    this.userName = userName;
  }

  updateRepository(repositoryName: string) {
    this.repositoryName = repositoryName;
  }
}