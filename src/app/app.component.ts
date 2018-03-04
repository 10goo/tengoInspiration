import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  overlayActive = true;

      toggleOverlay(): void {
        this.overlayActive = !this.overlayActive;
      }
}
