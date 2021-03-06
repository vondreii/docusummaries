import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // login
  loggedIn: boolean;
  usernameInput: string;
  pwdInput: string;

  // User from DB
  user: any;
  username: string;
  pwd: string;

  // Toggle Visibility to add and edit docos
  openAdd: boolean;
  openEdit: boolean;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loggedIn = false;
    this.openAdd = false;
    this.openEdit = false;
  }

  // When the user clicks Login with inputs
  login() {
    // Gets the username and pwd stored in the Database
    this.getUser().then(()=> {
      // if both Password and username are correct
      if(this.validate("Username", this.usernameInput, this.username)
        && this.validate("Password", this.pwdInput, this.pwd)) {
          // Show other components (add and edit)
          this.loggedIn = true;
      }
    })
  }

  // Gets the username and pwd stored in the Database
  async getUser() {
    this.user = await this.userService.readFromDB();
    this.username = this.user[0].username;
    this.pwd = this.user[0].pwd;
  }

  // Checks if the inputs match the correct password
  validate(type: string, input: string, answer: string): boolean {
    if(input) {
      if(input.match(answer)) {
        return true;
      }
      else {
        alert(type + " is incorrect");
      }
    }
    return false;
  }

  // Opens the Add component and form
  toggleAdd() {
    this.openAdd = !this.openAdd;
  }

  // Opens the Edit component and form
  toggleEdit() {
    this.openEdit = !this.openEdit;
  }
}
