import { Component } from '@angular/core';

const randomVariable = 2 + 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'super duper apper scooper';
  numNum = randomVariable;
}
