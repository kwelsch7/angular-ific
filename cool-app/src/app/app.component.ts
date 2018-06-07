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
  blankProp = '_blank'; // for Property Binding
  randomNum = 1;
  randomClicked = false;

  public getTitle() {
    return this.title;
  }

  public randomNumGenerate = () => {
    this.randomClicked = true;
    this.randomNum = Math.ceil(Math.random() * 10);
  }

  public getRandomColor = () => {
    if (this.randomNum < 3) { return 'green'; }
    if (this.randomNum < 5) { return 'yellow'; }
    if (this.randomNum < 7) { return 'dodgerblue'; }
    if (this.randomNum < 9) { return 'coral'; }
    return 'orange';
  }
}
