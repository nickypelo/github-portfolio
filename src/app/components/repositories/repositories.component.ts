import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Repository } from 'src/app/interfaces/repository';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit{

  repos$: Observable<Repository[]> | undefined;

  constructor(private githubService: GithubService) {
    
  }

  ngOnInit(): void {
    this.repos$ = this.githubService.getRepos()
    .pipe(map(repos => repos.filter(repo => !repo.fork))
    );    
  }
}
