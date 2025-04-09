import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-module',
  standalone: false,       // This is to make a component module based
  templateUrl: './module.component.html',
  styleUrl: './module.component.scss'
})
export class ModuleComponent {

  constructor(private userService : UserService){

  }

  handleClick(){
    console.log(" button clicked from module component");
    this.userService.serviceFunction();
  }

}
