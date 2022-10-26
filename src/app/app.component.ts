import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  situation: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  onClick(): void {
    console.log();
  }
}
