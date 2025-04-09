import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Output() userSelected = new EventEmitter<string>(); // this is an old way of sending data

  userMouseLeave = output<string>();   // this is a new way of sending data but do not use signal


  @Input({required:true}) name!:string;      // this is earlier way of receing input. notice ! this explains TS that variable has intitialized not to worry
  city = input<string>();                    // This is a signal and is optional to make it required it must be input.required<string>();

  get cityInfo() {                          // this is old way of getter to combine data
    return " lives in " + this.city();
  }


  aboutCity = computed(() => ", " + this.city() + " is a good one");   // this is a combination of signal for getter to combine data


  onClickUser(name:string) {                   // this is a click event hander
    this.userSelected.emit(name);
  }

  onUserMouseLeave(name:string){            // this is a mouseLeave event hander
    this.userMouseLeave.emit(name);
  }
}
