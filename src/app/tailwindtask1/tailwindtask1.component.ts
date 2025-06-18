import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from './user.service';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-tailwindtask1',
  imports: [FormsModule],
  templateUrl: './tailwindtask1.component.html',
  styleUrl: './tailwindtask1.component.scss',
})
export class Tailwindtask1Component {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  users:any[] = []
  constructor(private userService: UserService){}

  fetchUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.userService.addUser(this.user).subscribe(() => {
        this.fetchUsers();  
        form.resetForm();
      });
    }
  }

  ngOnInit(){
    this.fetchUsers()
  }
}
