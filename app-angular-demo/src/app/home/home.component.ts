import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  users: User[] = [];
  constructor( private userService:UserService) {
    this.currentUser= JSON.parse(localStorage.getItem('currentUser'));   }

  ngOnInit() {
    this.loadAllUsers();
  }
  loadAllUsers() {
    this.userService.getAll().subscribe(users=>{this.users=users;});
  }
  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
}
}
