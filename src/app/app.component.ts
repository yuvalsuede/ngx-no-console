import { Component } from '@angular/core';

@Component({
  selector: 'ngx-no-console-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-no-console works!';

  constructor() {
    console.log('dewdew');
  }

}
