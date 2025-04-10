import { Component, signal } from '@angular/core';
import { AppModule } from '../app.module';
import { UserListComponent } from '../user-list/user-list.component';
import {userData} from '../userData';

@Component({
  selector: 'app-home',
  imports: [UserListComponent, AppModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = signal('learn-angular'); // Signal intoducet in v16 and stable in v17
  userData = userData;
}
