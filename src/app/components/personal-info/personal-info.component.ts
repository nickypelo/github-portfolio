import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit{

  user$: Observable<User> | undefined;

  constructor(private githubService: GithubService){}

  ngOnInit(): void {
      this.user$ = this.githubService.getUser();
  }

}
