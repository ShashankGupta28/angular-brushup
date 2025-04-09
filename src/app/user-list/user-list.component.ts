import { Component, Input, signal } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input({required:true}) userList!:any;

  componentInfo = "This is a UserList Component" // sending value to component template

  selectedUser = signal("");

  signalComponentInfo = signal("This is a message usingSignal")

  onSelectUser(name:string) { // this is getting value from user component
      this.selectedUser.set(name);
  }

  onUserMouseLeave(name:string){
    console.log("Leave : " + name);
  }

}
