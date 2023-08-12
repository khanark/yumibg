import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: IUser | undefined;
  activeButton: string = 'button1';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ user }) => {
      this.user = user;
    });
  }

  setActiveButton(button: string) {
    this.activeButton = button;
  }
}
