import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {userData} from './userData';
import { UserListComponent } from './user-list/user-list.component';
import { AppModule } from './app.module';


// This is a standalone component and was introduced in v14 and became default in v17, no need to add Standalone property in decorator
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserListComponent, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = signal('learn-angular'); // Signal intoducet in v16 and stable in v17
  userData = userData;
}
