import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$ : Object;

  constructor( private data: UserService) { }

  ngOnInit() {
    this.data.getUser().subscribe(
      data => this.user$ = data
    )

  }

}
