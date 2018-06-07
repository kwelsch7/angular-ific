import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public places = ['Cool place', 'Okay Place', 'Boise', 'Colorado Springs', 'Spokane'];
  public newPlace = '';

  public addPlace() {
    // Thanks event binding
    if (!!this.newPlace) {
      this.places.push(this.newPlace);
      this.newPlace = '';
    }
  }
}
