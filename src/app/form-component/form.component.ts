import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { ContentPojectionComponent } from '../content-pojection/content-pojection.component';

@Component({
  selector: 'app-form-component',
  imports: [FormsModule,ContentPojectionComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  constructor(private userService: UserService) {}

  name = signal("");    // use of signal for 2 way bindind
  city = "";          // 2 way bindind

  onClickHandler(){
    console.log("button Clicked");
    this.userService.serviceFunction();
  }

}
